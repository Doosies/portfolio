package com.song.backfol.domain.user;


import com.song.backfol.domain.user.dto.UserDTO;
import com.song.backfol.domain.user.service.UserService;
import com.song.backfol.global.DTO.response.BaseResponse;
import com.song.backfol.global.DTO.response.SingleDataResponse;
import com.song.backfol.global.exception.DuplicatedUsernameException;
import com.song.backfol.global.exception.UserNotFoundException;
import com.song.backfol.global.service.ResponseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class UserController {
    
    @Autowired
    UserService userService;
    
    @Autowired
    ResponseService responseService;


    @PostMapping(value="/join")
    public ResponseEntity join(@RequestBody UserDTO user) {
        ResponseEntity responseEntity = null;
        // log.info(user.getUserId());
        // log.info(user.getUserPw());
        try {
            boolean isJoin = userService.join(user);
            String msg = isJoin ? "회원가입 성공" : "회원가입 실패";
            SingleDataResponse<Boolean> response = responseService.getSingleDataResponse(true, msg, isJoin);
            responseEntity = ResponseEntity.status(HttpStatus.OK).body(response);
        }catch(DuplicatedUsernameException exception) {
            log.debug(exception.getMessage());
            BaseResponse response = responseService.getBaseResponse(false, exception.getMessage());

            responseEntity = ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
        return responseEntity;
    }


    /**
     * @param idDTO userId 전송을 위한 DTO
     * @return userId가 있다면 success값을 true, 없다면 false를 리턴.
     */
    @GetMapping(value="/get")
    public ResponseEntity isHaveUser(@RequestParam String userId) {
        ResponseEntity responseEntity = null;
        try {
            boolean isHaveUser = userService.haveUser(userId);
            String message = isHaveUser ? "회원가입된 유저입니다." : "회원가입 안된 유저입니다.";
            SingleDataResponse<Boolean> response = responseService.getSingleDataResponse(true, message, isHaveUser);
            responseEntity = ResponseEntity.status(HttpStatus.CREATED).body(response);


        }catch(UserNotFoundException exception) {
            log.debug(exception.getMessage());
            BaseResponse response = responseService.getBaseResponse(false, exception.getMessage());
            responseEntity = ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
        return responseEntity;
    }

    
}
