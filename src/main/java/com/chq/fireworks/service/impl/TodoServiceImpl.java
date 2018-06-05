package com.chq.fireworks.service.impl;

import com.chq.fireworks.common.constant.DictEnums;
import com.chq.fireworks.common.constant.SystemConstant;
import com.chq.fireworks.common.constant.TableMaxNumEnum;
import com.chq.fireworks.common.util.AssertUtil;
import com.chq.fireworks.mapper.SystemMapper;
import com.chq.fireworks.mapper.TodoMapper;
import com.chq.fireworks.model.Todo;
import com.chq.fireworks.qo.TodoQuery;
import com.chq.fireworks.service.TableMaxNumService;
import com.chq.fireworks.service.TodoService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hzsun.framework.commons.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("todoService")
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoMapper todoMapper;
    @Autowired
    private TableMaxNumService tableMaxNumService;
    @Autowired
    private SystemMapper systemMapper;

    @Override
    public void addTodo(Todo todo) {
        todo.setTodoNum(tableMaxNumService.updateAndGetMaxNum(TableMaxNumEnum.TODO).intValue());
        todo.setCreateTime(systemMapper.getServerTime());
        todo.setStatus(SystemConstant.INVALID);
        todoMapper.insert(todo);
    }

    @Override
    public void deleteTodo(Integer todoNum) {
        Todo record = new Todo();
        record.setTodoNum(todoNum);
        record.setStatus(DictEnums.TodoStatus.DELETE.getValue());
        todoMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public void updateTodo(Todo todo) {
        todoMapper.updateByPrimaryKeySelective(todo);
    }

    @Override
    public List<Todo> queryTodo(TodoQuery todoQuery) {
        return todoMapper.queryTodo(todoQuery);
    }

    @Override
    public PageInfo<Todo> queryTodo(TodoQuery todoQuery, PageBean pageBean) {
        PageHelper.startPage(pageBean.getPage(), pageBean.getLimit());
        return new PageInfo<>(todoMapper.queryTodo(todoQuery));
    }

    @Override
    public void completeTodo(Integer todoNum, String completeUser, String completeRemark) {
        checkComplete(todoNum, completeUser, completeRemark);
        Todo record = new Todo();
        record.setTodoNum(todoNum);
        record.setStatus(DictEnums.TodoStatus.COMPLETED.getValue());
        record.setCompleteRemark(completeRemark);
        record.setCompleteUser(completeUser);
        record.setCompleteTime(systemMapper.getServerTime());
        todoMapper.updateByPrimaryKeySelective(record);
    }

    private void checkComplete(Integer todoNum, String completeUser, String completeRemark) {
        AssertUtil.notNull(todoNum, "任务编号不能为空");
        AssertUtil.isNotBlank(completeUser, "完成者不能为空");
        TodoQuery todoQuery = new TodoQuery();
        todoQuery.setTodoNum(todoNum);
        List<Todo> pos = todoMapper.queryTodo(todoQuery);
        AssertUtil.isNotEmpty(pos, "任务不存在");
        AssertUtil.isTrue(pos.size() == 1, "存在多个任务");
        AssertUtil.isNotTrue(pos.get(0).getStatus().equals(DictEnums.TodoStatus.COMPLETED.getValue()), "任务已完成");
    }

}
