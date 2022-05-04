package com.song.backfol.domain.signup;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.regex.Pattern;

import com.song.backfol.global.responseRequest.Message;
import com.song.backfol.global.responseRequest.StatusEnum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class UserController {
    @Autowired
    UserService userService;
    // private final static Logger log = LoggerFactory.getLogger(LogTest.class);

    /**
     * 회원가입
     */
    @PostMapping("/signUp")
    public ResponseEntity signUp(@RequestBody UserVo user) throws IOException{
        log.info("아이디 생성 요청");

        Message message = new Message();
        HttpHeaders headers= new HttpHeaders();


        int state = userService.idCheck(user.getUserId());
        // 아이디가 중복되지 않으면!
        if ( state == 0) {
            String pattern = "^[a-z0-9]{5,20}$";
            boolean regex = Pattern.matches(pattern, user.getUserId());
            if (regex) {
                message.setStatus(StatusEnum.OK);
                message.setMessage("아이디 생성 성공");
                message.setData(user.getUserId());
                userService.createUser(user);
            }else {
                message.setStatus(StatusEnum.OK);
                message.setMessage("아이디의 형식이 맞지 않음.");
            }
        }else {
            message.setStatus(StatusEnum.OK);
            message.setMessage("중복된 아이디값");
        }

        headers.setContentType(new MediaType("application", "json",
        Charset.forName("UTF-8")));
        

        
        return new ResponseEntity<>(message, headers, HttpStatus.OK);
    }

    /**
     * 아이디 중복 확인
     * @return
     */
    @PostMapping("/checkId")
    public ResponseEntity idCheck(@RequestBody UserVo user) throws IOException{
        log.info("아이디 중복 확인 요청");
        log.info(user.getUserId());

        Message message = new Message();
        HttpHeaders headers= new HttpHeaders();
        // 0: 불가능, 1: 가능
        int state = userService.idCheck(user.getUserId());
        log.info(user.getUserId());
        log.info(Integer.toString(state));
        
        if (state == 0) {
            message.setStatus(StatusEnum.OK);
            message.setMessage("생성 가능한 아이디");
        }else {
            message.setStatus(StatusEnum.OK);
            message.setMessage("중복된 아이디");
        }
        message.setData(state);
        headers.setContentType(new MediaType("application", "json",Charset.forName("UTF-8")));
        
        return new ResponseEntity<>(message, headers, HttpStatus.OK);
    }
}
