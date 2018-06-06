package com.chq.fireworks.mapper;

import com.chq.fireworks.model.UserModuleUse;
import com.chq.fireworks.model.UserModuleUseKey;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserModuleUseMapper {
    int deleteByPrimaryKey(UserModuleUseKey key);

    int insert(UserModuleUse record);

    int insertSelective(UserModuleUse record);

    UserModuleUse selectByPrimaryKey(UserModuleUseKey key);

    int updateByPrimaryKeySelective(UserModuleUse record);

    int updateByPrimaryKey(UserModuleUse record);

    List<UserModuleUse> queryUserRecentlyUseModule(@Param("userId") Integer userId);

    List<UserModuleUse> queryRecommendUseModule(@Param("userId") Integer userId);
}