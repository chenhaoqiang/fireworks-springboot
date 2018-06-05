package com.chq.fireworks.service.impl;

import com.chq.fireworks.common.constant.TableMaxNumEnum;
import com.chq.fireworks.mapper.TableMaxNumMapper;
import com.chq.fireworks.model.TableMaxNumKey;
import com.chq.fireworks.service.TableMaxNumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("tableMaxNumService")
public class TableMaxNumServiceImpl implements TableMaxNumService {

    @Autowired
    private TableMaxNumMapper tableMaxNumMapper;

    @Override
    public Long updateAndGetMaxNum(TableMaxNumEnum tableMaxNumEnum) {
        tableMaxNumMapper.updateMaxNum(tableMaxNumEnum.getTableName(), tableMaxNumEnum.getFieldName());
        TableMaxNumKey key = new TableMaxNumKey();
        key.setTableName(tableMaxNumEnum.getTableName());
        key.setFieldName(tableMaxNumEnum.getFieldName());
        return tableMaxNumMapper.selectByPrimaryKey(key).getCurrentValue();
    }
}
