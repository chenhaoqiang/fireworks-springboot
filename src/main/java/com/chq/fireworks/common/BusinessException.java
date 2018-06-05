package com.chq.fireworks.common;

/**
 * 业务异常类
 * 
 * @author chenhaoqiang
 * @since FW 1.0
 * @version FW 1.0
 */
public class BusinessException extends RuntimeException {

	private static final long serialVersionUID = -2721359519991744983L;

	public BusinessException() {
		super();
	}

	public BusinessException(String msg) {
		super(msg);
	}

	public BusinessException(Throwable cause) {
		super(cause);
	}

	public BusinessException(String msg, Throwable cause) {
		super(msg, cause);
	}

}
