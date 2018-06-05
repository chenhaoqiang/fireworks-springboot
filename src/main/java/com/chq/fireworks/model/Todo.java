package com.chq.fireworks.model;

import java.util.Date;

public class Todo {
    private Integer todoNum;

    private String content;

    private Date createTime;

    private String createUser;

    private Integer status;

    private Integer todoType;

    private String completeRemark;

    private Date completeTime;

    private String completeUser;

    public Integer getTodoNum() {
        return todoNum;
    }

    public void setTodoNum(Integer todoNum) {
        this.todoNum = todoNum;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser == null ? null : createUser.trim();
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getTodoType() {
        return todoType;
    }

    public void setTodoType(Integer todoType) {
        this.todoType = todoType;
    }

    public String getCompleteRemark() {
        return completeRemark;
    }

    public void setCompleteRemark(String completeRemark) {
        this.completeRemark = completeRemark == null ? null : completeRemark.trim();
    }

    public Date getCompleteTime() {
        return completeTime;
    }

    public void setCompleteTime(Date completeTime) {
        this.completeTime = completeTime;
    }

    public String getCompleteUser() {
        return completeUser;
    }

    public void setCompleteUser(String completeUser) {
        this.completeUser = completeUser == null ? null : completeUser.trim();
    }
}