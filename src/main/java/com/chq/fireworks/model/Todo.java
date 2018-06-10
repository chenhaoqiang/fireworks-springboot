package com.chq.fireworks.model;

import com.alibaba.fastjson.annotation.JSONField;

import java.util.Date;

public class Todo {
    private Integer todoNum;

    private String content;

    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    private String createUser;

    private Integer status;

    private Integer todoType;

    private String completeRemark;

    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date completeTime;

    private String completeUser;

    private String todoTypeName;

    private String createUserName;

    private String completeUserName;

    public String getTodoTypeName() {
        return todoTypeName;
    }

    public void setTodoTypeName(String todoTypeName) {
        this.todoTypeName = todoTypeName;
    }

    public String getCreateUserName() {
        return createUserName;
    }

    public void setCreateUserName(String createUserName) {
        this.createUserName = createUserName;
    }

    public String getCompleteUserName() {
        return completeUserName;
    }

    public void setCompleteUserName(String completeUserName) {
        this.completeUserName = completeUserName;
    }

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