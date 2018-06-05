package com.chq.fireworks.service;

import com.chq.fireworks.model.Todo;
import com.chq.fireworks.qo.TodoQuery;
import com.github.pagehelper.PageInfo;
import com.hzsun.framework.commons.PageBean;

import java.util.List;


/**
 * 任务服务。
 *
 * @author chenhaoqiang
 * @version fireworks 1.0
 * @since fireworks 1.0
 */
public interface TodoService {

    /**
     * 新增任务。
     *
     * @param todo 任务信息
     */
    void addTodo(Todo todo);

    /**
     * 删除任务。
     *
     * @param todoNum 任务编号
     */
    void deleteTodo(Integer todoNum);

    /**
     * 修改任务。
     *
     * @param todo 任务信息
     */
    void updateTodo(Todo todo);

    /**
     * 查询任务。
     *
     * @param todoQuery 任务查询对象
     * @return 任务列表
     */
    List<Todo> queryTodo(TodoQuery todoQuery);

    /**
     * 查询任务（分页）。
     *
     * @param todoQuery 任务查询对象
     * @param pageBean  分页bean
     * @return 任务列表
     */
    PageInfo<Todo> queryTodo(TodoQuery todoQuery, PageBean pageBean);

    /**
     * 完成任务。
     *
     * @param todoNum        任务编号
     * @param completeUser   完成者
     * @param completeRemark 完成说明
     */
    void completeTodo(Integer todoNum, String completeUser, String completeRemark);
}
