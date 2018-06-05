package com.chq.fireworks.model;

public class TableMaxNum extends TableMaxNumKey {
    private Long currentValue;

    private String remark;

    public Long getCurrentValue() {
        return currentValue;
    }

    public void setCurrentValue(Long currentValue) {
        this.currentValue = currentValue;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }
}