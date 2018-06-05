package com.chq.fireworks.mapper;

import com.chq.fireworks.model.TableMaxNum;
import com.chq.fireworks.model.TableMaxNumKey;
import org.apache.ibatis.annotations.Param;

public interface TableMaxNumMapper {
    int deleteByPrimaryKey(TableMaxNumKey key);

    int insert(TableMaxNum record);

    int insertSelective(TableMaxNum record);

    TableMaxNum selectByPrimaryKey(TableMaxNumKey key);

    int updateByPrimaryKeySelective(TableMaxNum record);

    int updateByPrimaryKey(TableMaxNum record);

    int updateMaxNum(@Param("tableName") String tableName, @Param("fieldName") String fieldName);
}