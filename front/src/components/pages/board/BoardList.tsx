import React, {useState} from 'react';
import styled from 'styled-components';
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
// const board = [
//     {id: 1, title: "이건 그1231231233231냥 제목이1231231231라고 지어봤어", nickname: "송민형", content: '이건 본문 내용인데 내용이라고해'},
//     {id: 2, title: "제목", nickname: "송민형", content: '두번째 컨텐츠'},
//     {id: 3, title: "제목", nickname: "송민형", content: '세번재 컨텐츠인데 나도몰랑'},
//     {id: 4, title: "제목", nickname: "송민형", content: ''},
//     {id: 5, title: "제목", nickname: "송민형", content: ''},
//     {id: 6, title: "제목", nickname: "송민형", content: ''},
//     {id: 7, title: "제목", nickname: "송민형", content: ''},
//     {id: 8, title: "제목", nickname: "송민형", content: ''},
//     {id: 9, title: "제목", nickname: "송민형", content: ''},
//     {id: 10, title: "제목", nickname: "송민형", content: ''},
//     {id: 11, title: "제목", nickname: "송민형", content: ''},
//     {id: 12, title: "제목", nickname: "송민형", content: ''},
//     {id: 13, title: "제목", nickname: "송민형", content: ''},
//     {id: 14, title: "제목", nickname: "송민형", content: ''},
//     {id: 15, title: "제목", nickname: "송민형", content: ''},
//     {id: 16, title: "제목", nickname: "송민형", content: ''},
//     {id: 17, title: "제목", nickname: "송민형", content: ''},
//     {id: 18, title: "제목", nickname: "송민형", content: ''},
//     {id: 19, title: "제목", nickname: "송민형", content: ''},
//     {id: 20, title: "제목", nickname: "송민형", content: ''},
// ]
const BoardList = ({
    windowId, 
}:BoardListProps) => {
    const isLogin = useAppSelector(state => state.auth.logged);
    const board = useAppSelector(state => state.board.boards);
    const dispatch = useAppDispatch();

    const handleClickEdit = () => {
        dispatch(changeRoute({route: RoutePages.Edit, windowId}));
    }
    const handleClickRow = (boardInfods: BoardInfos, isTop?: boolean) => {
        if (!isTop){
            dispatch(changeRoute({route: RoutePages.Contents, windowId}));
            // dispatch(changeContents(boardInfods));
        }
        // TODO: boardId로 서버에서 값을 받아와줌
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
                    boardInfos={{writter: '아이디', title: '제목' }}
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
            <BoardBottom nowPage={1} windowId={windowId}/>
        </BoardListBlock>
    );
}

export default BoardList;