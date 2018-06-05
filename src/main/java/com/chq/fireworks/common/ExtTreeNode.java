package com.chq.fireworks.common;

import java.util.List;

public class ExtTreeNode {

	private String id;
	private List<? extends ExtTreeNode> children;
	private String cls;
	private boolean expanded;
	private String icon;
	private String iconCls;
	private boolean leaf;
	private String text;
	// 自定义属性
	private String moduleTag;

	public String getModuleTag() {
		return moduleTag;
	}

	public void setModuleTag(String moduleTag) {
		this.moduleTag = moduleTag;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public List<? extends ExtTreeNode> getChildren() {
		return children;
	}

	public void setChildren(List<? extends ExtTreeNode> children) {
		this.children = children;
	}

	public String getCls() {
		return cls;
	}

	public void setCls(String cls) {
		this.cls = cls;
	}

	public boolean isExpanded() {
		return expanded;
	}

	public void setExpanded(boolean expanded) {
		this.expanded = expanded;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	public String getIconCls() {
		return iconCls;
	}

	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}

	public boolean isLeaf() {
		leaf = null == children || children.isEmpty();
		return leaf;
	}

	public void setLeaf(boolean leaf) {
		this.leaf = leaf;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

}
