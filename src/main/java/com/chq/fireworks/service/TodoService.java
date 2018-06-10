package com.chq.fireworks.service;

import com.chq.fireworks.model.Todo;
import com.chq.fireworks.qo.TodoQuery;
import com.github.pagehelper.PageInfo;
import com.hzsun.framework.commons.PageBean;

import java.util.List;


/**
 * 待办服务。
 *
 * @author chenhaoqiang
 * @version fireworks 1.0
 * @since fireworks 1.0
 */
public interface TodoService {

    /**
     * 新增待办。
     *
     * @param todo 待办信息
     */
    void addTodo(Todo todo);

    /**
     * 删除待办。
     *
     * @param todoNum 待办编号
     */
    void deleteTodo(Integer todoNum);

    /**
     * 修改待办。
     *
     * @param todo 待办信息
     */
    void updateTodo(Todo todo);

    /**
     * 查询待办。
     *
     * @param todoQuery 待办查询对象
     * @return 待办列表
     */
    List<Todo> queryTodo(TodoQuery todoQuery);

    /**
     * 查询待办（分页）。
     *
     * @param todoQuery 待办查询对象
     * @param pageBean  分页bean
     * @return 待办列表
     */
    PageInfo<Todo> queryTodo(TodoQuery todoQuery, PageBean pageBean);

    /**
     * 完成待办。
     *
     * @param todoNum        待办编号
     * @param completeUser   完成者
     * @param completeRemark 完成说明
     */
    void completeTodo(Integer todoNum, String completeUser, String completeRemark);
}
