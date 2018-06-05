package com.chq.fireworks.config;

import com.chq.fireworks.service.UserService;
import com.chq.fireworks.shiro.PlatformFormAuthenticationFilter;
import com.chq.fireworks.shiro.PlatformRealm;
import com.chq.fireworks.shiro.RetryLimitHashedCredentialsMatcher;
import org.apache.shiro.cache.ehcache.EhCacheManager;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.session.mgt.eis.EnterpriseCacheSessionDAO;
import org.apache.shiro.session.mgt.eis.JavaUuidSessionIdGenerator;
import org.apache.shiro.session.mgt.quartz.QuartzSessionValidationScheduler;
import org.apache.shiro.spring.LifecycleBeanPostProcessor;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.filter.authc.LogoutFilter;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.apache.shiro.web.servlet.SimpleCookie;
import org.apache.shiro.web.session.mgt.DefaultWebSessionManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.servlet.Filter;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

@Configuration
public class ShiroConfig {

    private static final Logger log = LoggerFactory.getLogger(ShiroConfig.class);

    /**
     * 缓存管理器 使用Ehcache实现
     */
    @Bean(value = "cacheManager")
    public EhCacheManager cacheManager() {
        EhCacheManager cacheManager = new EhCacheManager();
        cacheManager.setCacheManagerConfigFile("classpath:config/ehcache.xml");
        return cacheManager;
    }

    /**
     * 凭证匹配器
     */
    @Bean(value = "credentialsMatcher")
    public RetryLimitHashedCredentialsMatcher credentialsMatcher(@Qualifier("cacheManager") EhCacheManager cacheManager) {
        RetryLimitHashedCredentialsMatcher matcher = new RetryLimitHashedCredentialsMatcher(cacheManager);
        matcher.setHashAlgorithmName("md5");
        matcher.setHashIterations(2);
        matcher.setStoredCredentialsHexEncoded(true);
        return matcher;
    }

    /**
     * Realm实现
     */
    @Bean(name = "platformRealm")
    public PlatformRealm platformRealm(
            @Qualifier("credentialsMatcher") RetryLimitHashedCredentialsMatcher credentialsMatcher) {
        PlatformRealm realm = new PlatformRealm();
        realm.setCredentialsMatcher(credentialsMatcher);
        realm.setCachingEnabled(true);
        realm.setAuthenticationCachingEnabled(true);
        realm.setAuthenticationCacheName("authenticationCache");
        realm.setAuthorizationCachingEnabled(true);
        realm.setAuthorizationCacheName("authorizationCache");
        return realm;
    }

    /**
     * 会话ID生成器
     */
    @Bean(name = "sessionIdGenerator")
    public JavaUuidSessionIdGenerator sessionIdGenerator() {
        return new JavaUuidSessionIdGenerator();
    }

    /**
     * 会话Cookie模板
     */
    @Bean(name = "sessionIdCookie")
    public SimpleCookie sessionIdCookie() {
        SimpleCookie cookie = new SimpleCookie("sid");
        cookie.setMaxAge(180000);
        return cookie;
    }

    /**
     * 会话DAO
     */
    @Bean(name = "sessionDAO")
    public EnterpriseCacheSessionDAO sessionDAO(@Qualifier("sessionIdGenerator") JavaUuidSessionIdGenerator sessionIdGenerator) {
        EnterpriseCacheSessionDAO dao = new EnterpriseCacheSessionDAO();
        dao.setActiveSessionsCacheName("shiro-activeSessionCache");
        dao.setSessionIdGenerator(sessionIdGenerator);
        return dao;
    }

    /**
     * 会话验证调度器
     */
    @Bean(name = "sessionValidationScheduler")
    public QuartzSessionValidationScheduler sessionValidationScheduler(@Qualifier("sessionManager") DefaultWebSessionManager sessionManager) {
        QuartzSessionValidationScheduler scheduler = new QuartzSessionValidationScheduler();
        scheduler.setSessionValidationInterval(7200000);
        scheduler.setSessionManager(sessionManager);
        return scheduler;
    }

    /**
     * 会话管理器
     */
    @Bean(name = "sessionManager")
    public DefaultWebSessionManager sessionManager(@Qualifier("sessionDAO") EnterpriseCacheSessionDAO sessionDAO,
                                                   @Qualifier("sessionIdCookie") SimpleCookie sessionIdCookie) {
        DefaultWebSessionManager manager = new DefaultWebSessionManager();
        manager.setGlobalSessionTimeout(7200000);
        manager.setSessionDAO(sessionDAO);
        manager.setSessionIdCookie(sessionIdCookie);
        return manager;
    }

    /**
     * 安全管理器
     */
    @Bean(name = "securityManager")
    public DefaultWebSecurityManager securityManager(@Qualifier("platformRealm") PlatformRealm platformRealm,
                                                     @Qualifier("sessionManager") DefaultWebSessionManager sessionManager,
                                                     @Qualifier("cacheManager") EhCacheManager cacheManager) {
        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
        securityManager.setRealm(platformRealm);
        securityManager.setSessionManager(sessionManager);
        securityManager.setCacheManager(cacheManager);
        return securityManager;
    }

    @Bean(name = "shiroFilter")
    public ShiroFilterFactoryBean shiroFilter(@Qualifier("securityManager") SecurityManager securityManager,
                                              @Qualifier("userService") UserService userService) {
        ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();
        shiroFilterFactoryBean.setSecurityManager(securityManager);
        shiroFilterFactoryBean.setLoginUrl("/login");
        shiroFilterFactoryBean.setSuccessUrl("/");
        shiroFilterFactoryBean.setUnauthorizedUrl("/unauthorized");

        Map<String, Filter> filters = new HashMap<>();
        PlatformFormAuthenticationFilter authcFilter = new PlatformFormAuthenticationFilter();
        authcFilter.setUserService(userService);
        filters.put("authc", authcFilter);

        LogoutFilter logoutFilter = new LogoutFilter();
        logoutFilter.setRedirectUrl("/login");
        filters.put("logout", logoutFilter);
        shiroFilterFactoryBean.setFilters(filters);

        Map<String, String> map = new LinkedHashMap<>();
        map.put("/app/**", "anon");
        map.put("/hzsun/**", "anon");
        map.put("/lib/**", "anon");
        map.put("/app.js", "anon");
        map.put("/unauthorized", "anon");
        map.put("/login", "authc");
        map.put("/logout", "logout");
        map.put("/**", "user");
        shiroFilterFactoryBean.setFilterChainDefinitionMap(map);

        return shiroFilterFactoryBean;
    }

    @Bean(name = "lifecycleBeanPostProcessor")
    public LifecycleBeanPostProcessor lifecycleBeanPostProcessor() {
        return new LifecycleBeanPostProcessor();
    }
}
