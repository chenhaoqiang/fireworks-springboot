package com.chq.fireworks.common.util;

import com.chq.fireworks.common.BusinessException;
import com.hzsun.framework.commons.utils.ExceptionUtil;
import com.hzsun.framework.commons.utils.StringUtil;
import com.hzsun.framework.commons.utils.algorithm.DesAlgorithmUtil;
import org.apache.log4j.Logger;

public class PasswordUtil {

    private static final Logger logger = Logger.getLogger(PasswordUtil.class);

    public static String encrypt(String plainText, String secretKey) {
        String cipherText = null;
        try {
            cipherText = DesAlgorithmUtil.encrypt(plainText, StringUtil.filRight(secretKey, '0', 8));
        } catch (Exception e) {
            logger.error(ExceptionUtil.getTrace(e));
            throw new BusinessException("加密错误：" + e.getMessage());
        }
        return cipherText;
    }

    public static String decrypt(String cipherText, String secretKey) {
        String plainText = null;
        try {
            plainText = DesAlgorithmUtil.decrypt(cipherText, StringUtil.filRight(secretKey, '0', 8));
        } catch (Exception e) {
            logger.error(ExceptionUtil.getTrace(e));
            throw new BusinessException("解密错误：" + e.getMessage());
        }
        return plainText;
    }

    public static String encryptEasytong(String plainText, Integer secretKey) {
        String cipherText = null;
        try {
            cipherText = DesAlgorithmUtil.encryptEasytong(secretKey, plainText);
        } catch (Exception e) {
            logger.error(ExceptionUtil.getTrace(e));
            throw new BusinessException("易通加密错误：" + e.getMessage());
        }
        return cipherText;
    }

    public static String decryptEasytong(String cipherText, Integer secretKey) {
        String plainText = null;
        try {
            plainText = DesAlgorithmUtil.decryptEasytong(secretKey, cipherText);
        } catch (Exception e) {
            logger.error(ExceptionUtil.getTrace(e));
            throw new BusinessException("易通解密错误：" + e.getMessage());
        }
        return plainText;
    }

    public static void main(String[] args) {
        String cipherText = encrypt("888888", "100001");
        System.out.println(cipherText);

        String plainText = decrypt(cipherText, "100001");
        System.out.println(plainText);
    }

}
