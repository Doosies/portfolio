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

    display: flex;
    flex-direction: column;
    gap: 20px;

`
const Contents = styled.div`
    width: 100%;
`;
const BoardContentsPage = ({
    windowId
}:BoardContentsPageProps) => {
    const contents = useAppSelector(state => state.contents);
    const dispatch = useAppDispatch();
    const handleClickBack = () => {
        dispatch(changeRoute({route: RoutePages.Main, windowId}));
    }
    return (
        <BoardContentsPageBlock>
            <Button onClick={handleClickBack}>홈으로 가기</Button>
            <Contents>
                <p> {contents.title}</p>
                <p> {contents.content}</p>
                <p> {contents.content}</p>
                <p> {contents.content}</p>
                <p> {contents.content}</p>
            </Contents>
            <BoardList windowId={windowId}/>
           
           
        </BoardContentsPageBlock>
    );
}

export default BoardContentsPage;