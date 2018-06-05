package com.chq.fireworks.qo;

import java.io.Serializable;

public class ModuleQuery implements Serializable {

    private static final long serialVersionUID = -3252480835483294013L;

    private String moduleCode;

    private String moduleName;

    private Integer roleId;

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public String getModuleCode() {
        return moduleCode;
    }

    public void setModuleCode(String moduleCode) {
        this.moduleCode = moduleCode;
    }

    public String getModuleName() {
        return moduleName;
    }

    public void setModuleName(String moduleName) {
        this.moduleName = moduleName;
    }

}
