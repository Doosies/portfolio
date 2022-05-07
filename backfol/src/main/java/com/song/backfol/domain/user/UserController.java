package com.song.backfol.domain.user;

import javax.servlet.http.Cookie;

import com.song.backfol.domain.user.dto.LoginDTO;
import com.song.backfol.domain.user.dto.TokenDTO;
import com.song.backfol.domain.user.dto.UserDTO;
import com.song.backfol.domain.user.service.UserService;
import com.song.backfol.global.DTO.response.BaseResponse;
import com.song.backfol.global.DTO.response.SingleDataResponse;
import com.song.backfol.global.exception.DuplicatedUsernameException;
import com.song.backfol.global.exception.LoginFailedException;
import com.song.backfol.global.exception.UserNotFoundException;
import com.song.backfol.global.jwt.TokenProvider;
import com.song.backfol.global.service.ResponseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.CookieValue;
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
    @Autowired
    TokenProvider tokenProvider;



    @PostMapping(value="/join")
    public ResponseEntity<?> join(@RequestBody UserDTO user) {
        ResponseEntity responseEntity = null;
        
        try {
            userService.join(user);
            TokenDTO token = userService.tokenGenerator(user.getUserId());
            ResponseCookie responseCookie = 
                ResponseCookie.from(HttpHeaders.SET_COOKIE, token.getRefreshToken())///new Cookie("refreshToken", token.getRefreshToken());
                .path("/")
                .maxAge(14 * 24 * 60 * 60) // 14일
                .httpOnly(true)
                // .httpOnly(true).secure(true)
                .build();
            System.out.println(responseCookie.toString());

            SingleDataResponse<String> response = responseService.getSingleDataResponse(true, user.getUserId(), token.getAccessToken());
            responseEntity = ResponseEntity.status(HttpStatus.OK)
                .header(HttpHeaders.SET_COOKIE, responseCookie.toString())
                .body(response);

        }catch(DuplicatedUsernameException exception) {
            BaseResponse response = responseService.getBaseResponse(false, exception.getMessage());
            responseEntity = ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);

        }
        return responseEntity;
    }

    @PostMapping(value="/login")
    public ResponseEntity login(@RequestBody LoginDTO loginDto) {
        ResponseEntity responseEntity = null;
        try {
            String userId = userService.login(loginDto);
            TokenDTO token = userService.tokenGenerator(userId);
            ResponseCookie responseCookie = 
                ResponseCookie.from(HttpHeaders.SET_COOKIE, token.getRefreshToken())///new Cookie("refreshToken", token.getRefreshToken());
                .path("/")
                .maxAge(14 * 24 * 60 * 60) // 14일
                .httpOnly(true)
                // .secure(true)
                .build();

            SingleDataResponse<String> response = responseService.getSingleDataResponse(true, userId, token.getAccessToken());
            responseEntity = ResponseEntity.status(HttpStatus.OK)
                .header(HttpHeaders.SET_COOKIE, responseCookie.toString())
                .body(response);
    
        } catch (LoginFailedException exception) {
            log.debug(exception.getMessage());
            BaseResponse response = responseService.getBaseResponse(false, exception.getMessage());

            responseEntity = ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        return responseEntity;
    }
    
    @PostMapping(value="/logout")
    public ResponseEntity logout(        
        @CookieValue(value = HttpHeaders.SET_COOKIE) Cookie refreshCookie
    ) {
        ResponseEntity responseEntity = null;
        try {
            ResponseCookie responseCookie = 
                ResponseCookie.from(HttpHeaders.SET_COOKIE, "")///new Cookie("refreshToken", token.getRefreshToken());
                .path("/")
                .httpOnly(true)
                .secure(true)
                .maxAge(0).build();
            BaseResponse response = 
                responseService.getBaseResponse(true, "로그아웃 성공");
            responseEntity = ResponseEntity.status(HttpStatus.OK)
                .header(HttpHeaders.SET_COOKIE, responseCookie.toString())
                .body(response);
    
        } catch (LoginFailedException exception) {
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
        // Cookie cookie = new Cookie("name", value)
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
