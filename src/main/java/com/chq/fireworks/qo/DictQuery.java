package com.chq.fireworks.qo;

import java.io.Serializable;

public class DictQuery implements Serializable {

    private static final long serialVersionUID = -6446758452159694355L;

    private Integer typeNum;

    public Integer getTypeNum() {
        return typeNum;
    }

    public void setTypeNum(Integer typeNum) {
        this.typeNum = typeNum;
    }

}
