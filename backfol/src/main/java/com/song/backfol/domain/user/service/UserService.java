package com.song.backfol.domain.user.service;

import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// import io.jsonwebtoken.lang.Collections; 
import lombok.RequiredArgsConstructor;

import com.song.backfol.domain.user.UserMapper;
import com.song.backfol.domain.user.dto.LoginDTO;
import com.song.backfol.domain.user.dto.UserDTO;
import com.song.backfol.global.exception.DuplicatedUsernameException;
import com.song.backfol.global.exception.LoginFailedException;
import com.song.backfol.global.exception.UserNotFoundException;
import com.song.backfol.global.jwt.TokenProvider;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService{
    // 암호화 위한 엔코더
    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private final TokenProvider jwtTokenProvider;

    // 회원가입 시 저장시간을 넣어줄 DateTime형
    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:sss");
    Date time = new Date();
    String localTime = format.format(time);

    @Autowired
    UserMapper userMapper;


    /**
     * 유저 회원가입
     * @param userVo
     */
    @Transactional
    public boolean join(UserDTO user) {
        // 가입된 유저인지 확인
        if (userMapper.findUserId(user.getUserId()).isPresent()) {
            throw new DuplicatedUsernameException("이미 가입된 유저에요");
        }
        // 가입 안했으면 아래 진행
        UserDTO userVo = UserDTO.builder()
        .userId(user.getUserId())
        .userPw(passwordEncoder.encode(user.getUserPw()))
        .userRole("ROLE_USER")
        .createDate(localTime)
        .updateDate(localTime)
        .build();

        userMapper.join(userVo);
        // userMapper.addRole(userVo);
        
        return userMapper.findUserId(user.getUserId()).isPresent();
    }

    public String login(LoginDTO loginDTO) {

        UserDTO userDto = userMapper.findUser(loginDTO.getUserId())//indUserByUsername(loginDto.getUsername())
                .orElseThrow(() -> new LoginFailedException("잘못된 아이디입니다"));
        
        if (!passwordEncoder.matches(loginDTO.getUserPw(), userDto.getPassword())) {
            throw new LoginFailedException("잘못된 비밀번호입니다");
        }

        return jwtTokenProvider.createToken(userDto.getUserId(), Collections.singletonList(userDto.getUserRole()));
    }

    /**
     * 유저가 db에 있는지 확인하는 함수
     * @param userid 유저의 아이디 입력
     * @return 유저가 있다면: true, 유저가 없다면: false
     */
    public boolean haveUser(String userid) {
        // IdDTO idDTO = IdDTO.builder().userId(userid).build();
        if (userMapper.findUserId(userid).isPresent()) {
            return true;
        }else {
            return false;
        }
    }

    /**
     * 유저의 아이디를 찾는 함수
     * @param userId 유저의 아이디 입력
     * @return 유저의 아이디가 없다면 에러를 뱉고, 있다면 userId리턴
     */
    public UserDTO findUserId(String userId) {
        return userMapper.findUserId(userId)
                .orElseThrow(() -> 
                    new UserNotFoundException("알 수 없는 유저입니다."));
    }
}
