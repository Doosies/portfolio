package com.song.backfol.domain.board;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BoardMapper {
    // create 
    void createBoard(BoardDTO boardDTO);
    // List<BoardDTO> readBoardTitles(int page, int boardListNum);
    // edit
    List<BoardDTO> readBoardTitles(BoardRequestDTO boardRequestDTO);
    int getBoardListLimit();
    BoardDTO getBoard(int boardId);
    // void updateBoard(BoardDTO boardDTO);
    // void deleteBoard(int boardId);
}
