package com.song.backfol.domain.board;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.song.backfol.global.exception.BoardException;
import com.song.backfol.global.jwt.TokenProvider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
// @Transactional(readOnly = true)
public class BoardService {
    
    @Autowired
    BoardMapper boardMapper;
    @Autowired
    TokenProvider tokenProvider;
    
    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:sss");
    Date time = new Date();
    String localTime = format.format(time);

    public boolean createBoardService(BoardDTO boardDTO, String accessToken) {
        String token = tokenProvider.resolveToken(accessToken);
        String userId = tokenProvider.getUserId(token);

        BoardDTO board = BoardDTO.builder()
                        .boardWritter(userId)
                        .boardContent(boardDTO.getBoardContent())
                        .boardTitle(boardDTO.getBoardTitle()) 
                        .boardHits(1)
                        .createDate(localTime)
                        .updateDate(localTime).build();

        boardMapper.createBoard(board);
        return true;
    }

    public List<BoardDTO> readBoardLists(BoardRequestDTO boardRequestDTO) {
        // System.out.println(boardMapper.readBoardTitles(boardRequestDTO));
        return boardMapper.readBoardTitles(boardRequestDTO);
    }

    public int getBoardListLimit() {
        return boardMapper.getBoardListLimit();
    }

    public BoardDTO getBoard(int boardId) {
        return boardMapper.getBoard(boardId);
    }

    // 액세스 토큰을 받음
    public void updateBoard(BoardDTO boardDTO, String accessToken) {
        String userId = getUserIdFromToken(accessToken);
        // TODO: 인증되면 업데이트 하게 바꾸기

    }

    // 액세스 토큰을 받음
    public void deleteBoard(String boardId, String accessToken) {
        String userId = getUserIdFromToken(accessToken);
        // TODO: 인증되면 삭제하게 바꾸기
    }




    public String getUserIdFromToken(String accessToken) {
        String token = tokenProvider.resolveToken(accessToken);
        String userId = tokenProvider.getUserId(token);
        return userId;
    }
}
