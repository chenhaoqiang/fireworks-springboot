package com.chq.fireworks.common.util;

import com.chq.fireworks.common.BusinessException;
import com.hzsun.framework.commons.utils.CollectionUtil;
import com.hzsun.framework.commons.utils.StringUtil;

import java.util.Collection;

public class AssertUtil {
    public static void isTrue(boolean expression, String errMsg) {
        if (!expression) {
            throw new BusinessException(errMsg);
        }
    }

    public static void isNotTrue(boolean expression, String errMsg) {
        if (expression) {
            throw new BusinessException(errMsg);
        }
    }

    public static void notNull(Object obj, String errMsg) {
        if (null == obj) {
            throw new BusinessException(errMsg);
        }
    }

    public static void isNull(Object obj, String errMsg) {
        if (null != obj) {
            throw new BusinessException(errMsg);
        }
    }

    public static void isNotBlank(String text, String errMsg) {
        if (StringUtil.isBlank(text)) {
            throw new BusinessException(errMsg);
        }
    }

    public static void isBlank(String text, String errMsg) {
        if (StringUtil.isNotBlank(text)) {
            throw new BusinessException(errMsg);
        }
    }

    public static void isNotEmpty(Collection<?> c, String errMsg) {
        if (CollectionUtil.isEmpty(c)) {
            throw new BusinessException(errMsg);
        }
    }

    public static void isEmpty(Collection<?> c, String errMsg) {
        if (CollectionUtil.isNotEmpty(c)) {
            throw new BusinessException(errMsg);
        }
    }
}
