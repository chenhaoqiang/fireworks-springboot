package com.chq.fireworks.mapper;

import com.chq.fireworks.model.User;
import com.chq.fireworks.qo.UserQuery;

import java.util.List;

public interface UserMapper {
    int deleteByPrimaryKey(Integer userId);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer userId);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    List<User> queryUser(UserQuery userQuery);
}