package com.chq.fireworks.service.impl;

import com.chq.fireworks.mapper.DictMapper;
import com.chq.fireworks.mapper.DictTypeMapper;
import com.chq.fireworks.model.Dict;
import com.chq.fireworks.model.DictKey;
import com.chq.fireworks.model.DictType;
import com.chq.fireworks.qo.DictQuery;
import com.chq.fireworks.service.DictService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hzsun.framework.commons.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("dictService")
public class DictServiceImpl implements DictService {

    @Autowired
    private DictMapper dictMapper;
    @Autowired
    private DictTypeMapper dictTypeMapper;

    @Override
    public List<Dict> queryDict(DictQuery dictQuery) {
        return dictMapper.queryDict(dictQuery);
    }

    @Override
    public PageInfo<Dict> queryDict(DictQuery dictQuery, PageBean pageBean) {
        PageHelper.startPage(pageBean.getPage(), pageBean.getLimit());
        return new PageInfo<>(dictMapper.queryDict(dictQuery));
    }

    @Override
    public void addDict(Dict dict) {
        dictMapper.insertSelective(dict);
    }

    @Override
    public void updateDict(Dict dict) {
        dictMapper.updateByPrimaryKeySelective(dict);
    }

    @Override
    public void deleteDict(Integer typeNum, Integer dictNum) {
        DictKey key = new DictKey();
        key.setTypeNum(typeNum);
        key.setDictNum(dictNum);
        dictMapper.deleteByPrimaryKey(key);
    }

    @Override
    public List<DictType> queryDictType() {
        return dictTypeMapper.query();
    }

}
