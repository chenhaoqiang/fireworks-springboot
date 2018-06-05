package com.chq.fireworks.qo;

import java.io.Serializable;

public class RoleQuery implements Serializable {

	private static final long serialVersionUID = 4557403176072611476L;

	private Integer userId;

	private Integer roleId;

	private String roleName;

	/**
	 * 角色名称是否模糊查询，默认是
	 */
	private boolean isRoleNameFuzzyQuery = true;

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public boolean isRoleNameFuzzyQuery() {
		return isRoleNameFuzzyQuery;
	}

	public void setRoleNameFuzzyQuery(boolean isRoleNameFuzzyQuery) {
		this.isRoleNameFuzzyQuery = isRoleNameFuzzyQuery;
	}

}
