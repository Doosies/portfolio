package com.song.backfol.domain.board;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class BoardController {
    
    // @Autowired
    // BoardService boardService;

    @PostMapping("/board/create")
    public String createBoard() {
        return "createBoard";
    }


    @PostMapping("/board/update")
    public String updateBoard() {
        return "updateBoard";
    }


    @GetMapping("/board/get/{startIdx}")
    public String getBoard() {
        return "get";
    }
}
