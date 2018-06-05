package com.chq.fireworks.service;

import com.chq.fireworks.model.Dict;
import com.chq.fireworks.model.DictType;
import com.chq.fireworks.qo.DictQuery;
import com.github.pagehelper.PageInfo;
import com.hzsun.framework.commons.PageBean;

import java.util.List;

public interface DictService {

    List<Dict> queryDict(DictQuery dictQuery);

    PageInfo<Dict> queryDict(DictQuery dictQuery, PageBean pageBean);

    void addDict(Dict dict);

    void updateDict(Dict dict);

    void deleteDict(Integer typeNum, Integer dictNum);

    List<DictType> queryDictType();

}