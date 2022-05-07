import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { getBoard, getBoardListLimit, getBoardLists } from '../../../modules/board';
import { changeContents } from '../../../modules/contents';
import { useAppDispatch, useAppSelector } from '../../../modules/hooks';
import { changeRoute, RoutePages } from '../../../modules/route';
import Button from '../../Button';
import BoardBottom from './BoardBottom';
import BoardRow from './BoardRow';

interface BoardListProps {
    windowId: number;
}
export interface BoardInfos {
    writter: string;
    title: string;
    boardId: number;
    // content: string;
}

const BoardListBlock = styled.div`
    width: 100%;
    height: 100%;   
    position: relative;

    display: flex;
    flex-direction: column;
`
const List = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const ListTop = styled.div`
    width:100%;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    /* align-items: center; */
`;

const BoardList = ({
    windowId, 
}:BoardListProps) => {
    const isLogin = useAppSelector(state => state.auth.logged);
    const board = useAppSelector(state => state.board.boards);
    const nowPage = useAppSelector( state => state.board.nowPage);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(getBoardLists());
        dispatch(getBoardListLimit());
    },[nowPage]);

    const handleClickEdit = () => {
        dispatch(changeRoute({route: RoutePages.Edit, windowId}));
    }
    const handleClickRow = (boardInfods: BoardInfos, isTop?: boolean) => {
        if (!isTop){
            dispatch(changeRoute({route: RoutePages.Contents, windowId}));
            dispatch(getBoard(boardInfods.boardId));
        }
    }

    return (
        <BoardListBlock>
            <ListTop>
                {isLogin &&
                    <Button width='100px' onClick={handleClickEdit}>
                        게시글 작성
                    </Button>
                }
            </ListTop>
            <BoardRow 
                    boardInfos={{writter: '아이디', title: '제목', boardId: -1 }}
                    isTop
            />
            <List>
                {board.map( (el,i) => 
                    <BoardRow 
                        boardInfos={el}
                        onClick={handleClickRow}
                        key={`boardlist${i}번쨰: ${el.title} ${el.title} `}
                    />
                )}
            </List>
            <BoardBottom windowId={windowId}/>
        </BoardListBlock>
    );
}

export default BoardList;