package com.chq.fireworks.qo;

import com.chq.fireworks.common.constant.DictEnums;

import java.io.Serializable;


public class UserQuery implements Serializable {

    private static final long serialVersionUID = 3835785488727342336L;

    private Integer userId;

    private String userNum;

    private String userName;

    /**
     * 用户名称是否模糊查询，默认是
     */
    private boolean isUserNameFuzzyQuery = true;

    private Integer idType;

    private Integer idTypeDictType = DictEnums.DictType.ID_TYPE.getValue();

    private String idNo;

    private Integer flag;

    private String phoneNo;

    private String email;

    public boolean isUserNameFuzzyQuery() {
        return isUserNameFuzzyQuery;
    }

    public void setUserNameFuzzyQuery(boolean isUserNameFuzzyQuery) {
        this.isUserNameFuzzyQuery = isUserNameFuzzyQuery;
    }

    public Integer getIdType() {
        return idType;
    }

    public void setIdType(Integer idType) {
        this.idType = idType;
    }

    public Integer getIdTypeDictType() {
        return idTypeDictType;
    }

    public void setIdTypeDictType(Integer idTypeDictType) {
        this.idTypeDictType = idTypeDictType;
    }

    public String getIdNo() {
        return idNo;
    }

    public void setIdNo(String idNo) {
        this.idNo = idNo;
    }

    public Integer getFlag() {
        return flag;
    }

    public void setFlag(Integer flag) {
        this.flag = flag;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserNum() {
        return userNum;
    }

    public void setUserNum(String userNum) {
        this.userNum = userNum;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

}
