package com.chq.fireworks.model;

public class DictType {
    private Integer typeNum;

    private String typeName;

    private Integer canModify;

    private String remark;

    public Integer getTypeNum() {
        return typeNum;
    }

    public void setTypeNum(Integer typeNum) {
        this.typeNum = typeNum;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName == null ? null : typeName.trim();
    }

    public Integer getCanModify() {
        return canModify;
    }

    public void setCanModify(Integer canModify) {
        this.canModify = canModify;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }
}