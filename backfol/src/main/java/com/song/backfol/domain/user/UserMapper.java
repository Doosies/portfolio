package com.song.backfol.domain.user;

import java.util.Optional;

import com.song.backfol.domain.user.dto.UserDTO;

import org.apache.ibatis.annotations.Mapper;

// import org.apache.iba
// @mapper
@Mapper
public interface UserMapper {
    // void createUser(UserVo user);
    // void setUserAuthority(UserVo user);
    // int idCheck(String id);
    void join(UserDTO userVo);
    void addRole(UserDTO userVo);
    // Optional<UserVo> findUserById(String userId);
    Optional<UserDTO> findUserId(String userId);
    // int findPkById(String id);sss
}
