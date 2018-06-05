package com.chq.fireworks.mapper;

import com.chq.fireworks.model.Todo;
import com.chq.fireworks.qo.TodoQuery;

import java.util.List;

public interface TodoMapper {
    int deleteByPrimaryKey(Integer todoNum);

    int insert(Todo record);

    int insertSelective(Todo record);

    Todo selectByPrimaryKey(Integer todoNum);

    int updateByPrimaryKeySelective(Todo record);

    int updateByPrimaryKey(Todo record);

    List<Todo> queryTodo(TodoQuery todoQuery);
}