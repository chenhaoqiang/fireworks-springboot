package com.chq.fireworks.qo;

import com.chq.fireworks.common.constant.DictEnums;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;


public class TodoQuery implements Serializable {

    private static final long serialVersionUID = 9032635657173475035L;

    private Integer todoNum;

    private Integer status;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createDate;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date completeDate;

    private Integer todoType;

    private Integer todoTypeDictType = DictEnums.DictType.TODO_TYPE.getValue();

    public Integer getTodoType() {
        return todoType;
    }

    public void setTodoType(Integer todoType) {
        this.todoType = todoType;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getCompleteDate() {
        return completeDate;
    }

    public void setCompleteDate(Date completeDate) {
        this.completeDate = completeDate;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getTodoNum() {
        return todoNum;
    }

    public void setTodoNum(Integer todoNum) {
        this.todoNum = todoNum;
    }

    public Integer getTodoTypeDictType() {
        return todoTypeDictType;
    }

}
