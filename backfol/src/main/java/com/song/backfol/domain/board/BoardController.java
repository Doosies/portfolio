package com.song.backfol.domain.board;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import com.song.backfol.global.DTO.response.SingleDataResponse;
import com.song.backfol.global.service.ResponseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/board")
public class BoardController {
    
    @Autowired
    ResponseService responseService;
    // BoardService boardService;

    @PostMapping("/create")
    @PreAuthorize("hasAnyRole('USER')")
    public ResponseEntity createBoard(@RequestBody BoardDTO boardDTO ) {
        
        ResponseEntity responseEntity = null;
        try {
            SingleDataResponse<Boolean> response = responseService.getSingleDataResponse(true, "msg", false);
            responseEntity = ResponseEntity.status(HttpStatus.CREATED).body(response);

        }catch(IllegalStateException e) {
            log.error(e.getMessage(), e);
        }catch (Exception e) {
            log.error("error creating", e);
        }
        return responseEntity;
    }


    // @PostMapping("/board/update")
    // public String updateBoard() {
    //     return "updateBoard";z
    // }


    // @GetMapping("/board/get/{startIdx}")
    // public String getBoard() {
    //     return "get";
    // }
}
