import React, {useState} from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../modules/hooks';
import { changeRoute, RoutePages } from '../../../modules/route';
import Button from '../../Button';
import BoardList, { BoardInfos } from '../board/BoardList';

interface BoardContentsPageProps {
    windowId: number;
}

const BoardContentsPageBlock = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    overflow-y: auto;
    /* position: absolute; */

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;

`
const Contents = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
`;

const Title = styled.h1`
    width: 100%;
    height: 50px;
`;
const Body = styled.div`
    width: 100%;
    height: 100%;
`;

const BottomButtonContainer = styled.div`

    width: 220px;
    height: 200px;
    /* padding: 10px; */
    /* background-color: pink; */
    display: flex;
    /* flex-direction: column; */
    gap: 20px;
`;
const BoardContentsPage = ({
    windowId
}:BoardContentsPageProps) => {
    // const contents = useAppSelector(state => state.contents);
    const userId = useAppSelector(state => state.auth.myId);
    const contents = useAppSelector(state => state.board.nowBoard);
    const dispatch = useAppDispatch();
    const handleClickBack = () => {
        dispatch(changeRoute({route: RoutePages.Main, windowId}));
    }
    console.log(userId);
    return (
        <BoardContentsPageBlock>
            <Button onClick={handleClickBack}>홈으로 가기</Button>
            <Contents>
                <Title>  {contents.title} </Title>
               <Body>  {contents.content} </Body>
               
            </Contents>
            {/* { userId === contents.writter &&
                <BottomButtonContainer>
                    <Button>삭제</Button>
                    <Button>수정</Button>
                </BottomButtonContainer>
            } */}
            <BoardList windowId={windowId}/>
           
           
        </BoardContentsPageBlock>
    );
}

export default BoardContentsPage;