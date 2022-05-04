package com.song.backfol.domain.signup;

import org.apache.ibatis.annotations.Mapper;

// import org.apache.iba
// @mapper
@Mapper
public interface UserMapper {
    void createUser(UserVo user);
    int idCheck(String id);
}
