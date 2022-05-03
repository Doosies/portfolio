import React, {useState} from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../../modules/hooks';
import { changeRoute, RoutePages } from '../../../modules/route';
import Button from '../../Button';

interface BoardEditPageProps {
    windowId: number;
}

const BoardEditPageBlock = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 20px;
`
const Title = styled.input`
    width: 100%;
    height: 30px;
`;
const Content = styled.textarea`
    width: 100%;
    height: 100%;
`;
const BottomContainer = styled.div`
    width: 100%;
    /* height: 60px; */
    display: flex;
    justify-content: center;
    align-items: center;

`;
const BoardEditPage = ({
    windowId
}:BoardEditPageProps) => {
    const dispatch = useAppDispatch();
    const handleClickCancel = () => {
        dispatch(changeRoute({route: RoutePages.Main, windowId}))
    }
    const handleClickAppy = () => {

    }
    return (
        <BoardEditPageBlock>
            <Title className='item' placeholder='제목을 입력해주세요'/>
            <Content className='item' placeholder='내용을 입력해주세요' />
            <BottomContainer>
                <Button >적용</Button>
                <Button onClick={handleClickCancel}>취소</Button>
            </BottomContainer>
        </BoardEditPageBlock>
    );
}

export default BoardEditPage;