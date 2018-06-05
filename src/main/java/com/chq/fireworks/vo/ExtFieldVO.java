package com.chq.fireworks.vo;

/**
 * EXTJS的字段信息
 * 
 * @author chenhaoqiang
 * @since FW 1.0
 * @version FW 1.0
 */
public class ExtFieldVO {

	private String name;

	private String type;

	public ExtFieldVO(String name, String type) {
		super();
		this.name = name;
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
}
