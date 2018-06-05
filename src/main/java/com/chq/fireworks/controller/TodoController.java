package com.chq.fireworks.controller;

import com.alibaba.fastjson.JSON;
import com.chq.fireworks.model.Todo;
import com.chq.fireworks.qo.TodoQuery;
import com.chq.fireworks.service.TodoService;
import com.hzsun.framework.commons.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.PrintWriter;

@Controller
@RequestMapping("/todo")
public class TodoController extends BaseController {

    @Autowired
    private TodoService todoService;

    @RequestMapping(value = "/queryTodo", method = RequestMethod.POST)
    public void queryTodo(TodoQuery todoQuery, PrintWriter pw) {
        output(pw, JSON.toJSONString(todoService.queryTodo(todoQuery)));
    }

    @RequestMapping(value = "/queryTodoByPage", method = RequestMethod.POST)
    public void queryTodoByPage(PageBean pageBean, TodoQuery todoQuery, PrintWriter pw) {
        output(pw, JSON.toJSONString(todoService.queryTodo(todoQuery, pageBean)));
    }

    @RequestMapping(value = "/addTodo", method = RequestMethod.POST)
    public void addTodo(Todo todo, PrintWriter pw) {
        todo.setCreateUser(getUserNum());
        todoService.addTodo(todo);
    }

    @RequestMapping(value = "/updateTodo", method = RequestMethod.POST)
    public void updateTodo(Todo todo, PrintWriter pw) {
        todoService.updateTodo(todo);
    }

    @RequestMapping(value = "/deleteTodo", method = RequestMethod.POST)
    public void deleteTodo(Integer todoNum, PrintWriter pw) {
        todoService.deleteTodo(todoNum);
    }

    @RequestMapping(value = "/completeTodo", method = RequestMethod.POST)
    public void completeTodo(Integer todoNum, String completeRemark, PrintWriter pw) {
        todoService.completeTodo(todoNum, getUserNum(), completeRemark);
    }

}
