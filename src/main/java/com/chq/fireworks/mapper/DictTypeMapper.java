package com.chq.fireworks.mapper;

import com.chq.fireworks.model.DictType;

import java.util.List;

public interface DictTypeMapper {
    int deleteByPrimaryKey(Integer typeNum);

    int insert(DictType record);

    int insertSelective(DictType record);

    DictType selectByPrimaryKey(Integer typeNum);

    int updateByPrimaryKeySelective(DictType record);

    int updateByPrimaryKey(DictType record);

    List<DictType> query();
}