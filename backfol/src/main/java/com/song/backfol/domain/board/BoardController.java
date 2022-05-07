package com.song.backfol.domain.board;


import java.util.List;
import java.util.Map;

import com.song.backfol.global.DTO.response.BaseResponse;
import com.song.backfol.global.DTO.response.SingleDataResponse;
import com.song.backfol.global.service.ResponseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
    @Autowired
    BoardService boardService;

    @PostMapping("/create")
    @PreAuthorize("hasAnyRole('USER')")
    public ResponseEntity createBoard(@RequestBody BoardDTO boardDTO, @RequestHeader(value = "Authorization") String accessToken) {
        
        ResponseEntity responseEntity = null;
        try {
            boolean isEnd = boardService.createBoardService(boardDTO, accessToken);
            SingleDataResponse<Boolean> response = responseService.getSingleDataResponse(true, "게시판 생성 성공", isEnd);
            responseEntity = ResponseEntity.status(HttpStatus.CREATED).body(response);

        }catch(IllegalStateException e) {
            log.error(e.getMessage(), e);
        }catch (Exception e) {
            log.error("error creating", e);
        }
        return responseEntity;
    }

    @GetMapping("/readBoardLists")
    public ResponseEntity readBoardLists(@RequestParam int startPage, @RequestParam int pageNum) {
        
        ResponseEntity responseEntity = null;
        try {
            BoardRequestDTO boardRequestDTO = BoardRequestDTO.builder().startPage(startPage).pageNum(pageNum).build();
            List<BoardDTO> boards = boardService.readBoardLists(boardRequestDTO);

            SingleDataResponse<List<BoardDTO>> response = responseService.getSingleDataResponse(true, "게시판 생성 성공", boards);
            responseEntity = ResponseEntity.status(HttpStatus.ACCEPTED).body(response);

        }catch(IllegalStateException e) {
            log.error(e.getMessage(), e);
        }catch (Exception e) {
            log.error("error creating", e);
        }
        return responseEntity;
    }

    @GetMapping("/getBoardListLimit")
    public ResponseEntity getBoardListLimit() {
        ResponseEntity responseEntity = null;
        try {
            int limit = boardService.getBoardListLimit();
            SingleDataResponse<Integer> response = 
                responseService.getSingleDataResponse(true, "게시판 최대값 불러오기 성공", limit);
            responseEntity = ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
        }catch (Exception e) {
            log.error("불로오기 실해", e);
            BaseResponse response = responseService.getBaseResponse(false, "게시판 최대값 불러오기 실패");
                responseEntity = ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
        }
        return responseEntity;
    }

    @GetMapping("/getBoard")
    public ResponseEntity getBoard(@RequestParam int boardId) {
        ResponseEntity responseEntity = null;
        try {
            BoardDTO boardDTO = boardService.getBoard(boardId);
            SingleDataResponse<BoardDTO> response = 
                responseService.getSingleDataResponse(true, "게시판 불러오기 성공", boardDTO);
            responseEntity = ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
        }catch (Exception e) {
            log.error("불로오기 실해", e);
            BaseResponse response = responseService.getBaseResponse(false, "게시판 불러오기 실패");
                responseEntity = ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
        }
        return responseEntity;
    }

    // @PostMapping("/updateBoard")
    // public ResponseEntity updateBoard(@RequestBody BoardDTO boardDTO, @RequestHeader(value = "Authorization") String accessToken) {
    //     ResponseEntity responseEntity = null;
    //     try {
            

    //         SingleDataResponse<BoardDTO> response = 
    //             responseService.getSingleDataResponse(true, "게시판 불러오기 성공", boardDTO);
    //         responseEntity = ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
    //     }catch (Exception e) {
    //         log.error("불로오기 실해", e);
    //         BaseResponse response = responseService.getBaseResponse(false, "게시판 불러오기 실패");
    //             responseEntity = ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
    //     }
    //     return responseEntity;
    // }

    // @PostMapping("/deleteBoard")
    // public ResponseEntity deleteBoard(@RequestBody BoardDTO boardDTO, @RequestHeader(value = "Authorization") String accessToken) {
    //     ResponseEntity responseEntity = null;
    //     try {
            
            
    //         SingleDataResponse<BoardDTO> response = 
    //             responseService.getSingleDataResponse(true, "게시판 불러오기 성공", boardDTO);
    //         responseEntity = ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
    //     }catch (Exception e) {
    //         log.error("불로오기 실해", e);
    //         BaseResponse response = responseService.getBaseResponse(false, "게시판 불러오기 실패");
    //             responseEntity = ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
    //     }
    //     return responseEntity;
    // }
    // @PostMapping("/board/update")
    // public String updateBoard() {
    //     return "updateBoard";z
    // }


    // @GetMapping("/board/get/{startIdx}")
    // public String getBoard() {
    //     return "get";
    // }
}
