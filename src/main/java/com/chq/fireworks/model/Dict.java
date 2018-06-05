package com.chq.fireworks.model;

public class Dict extends DictKey {
    private String dictCode;

    private String dictName;

    private Integer parentDictNum;

    private String remark;

    public String getDictCode() {
        return dictCode;
    }

    public void setDictCode(String dictCode) {
        this.dictCode = dictCode == null ? null : dictCode.trim();
    }

    public String getDictName() {
        return dictName;
    }

    public void setDictName(String dictName) {
        this.dictName = dictName == null ? null : dictName.trim();
    }

    public Integer getParentDictNum() {
        return parentDictNum;
    }

    public void setParentDictNum(Integer parentDictNum) {
        this.parentDictNum = parentDictNum;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }
}