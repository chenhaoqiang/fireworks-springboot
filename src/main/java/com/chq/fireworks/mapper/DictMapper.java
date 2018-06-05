package com.chq.fireworks.mapper;

import com.chq.fireworks.model.Dict;
import com.chq.fireworks.model.DictKey;
import com.chq.fireworks.qo.DictQuery;

import java.util.List;

public interface DictMapper {
    int deleteByPrimaryKey(DictKey key);

    int insert(Dict record);

    int insertSelective(Dict record);

    Dict selectByPrimaryKey(DictKey key);

    int updateByPrimaryKeySelective(Dict record);

    int updateByPrimaryKey(Dict record);

    List<Dict> queryDict(DictQuery dictQuery);
}