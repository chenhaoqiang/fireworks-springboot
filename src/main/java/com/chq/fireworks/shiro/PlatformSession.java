package com.chq.fireworks.shiro;

import java.util.Set;

public class PlatformSession {

    private Integer userId;

    private String userNum;

    private String userName;

    private Set<String> moduleCodes;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserNum() {
        return userNum;
    }

    public void setUserNum(String userNum) {
        this.userNum = userNum;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Set<String> getModuleCodes() {
        return moduleCodes;
    }

    public void setModuleCodes(Set<String> moduleCodes) {
        this.moduleCodes = moduleCodes;
    }

}
