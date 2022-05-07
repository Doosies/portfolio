import React, {useState} from 'react';
import styled from 'styled-components';
import { changePageState } from '../../../modules/board';
import { useAppDispatch, useAppSelector } from '../../../modules/hooks';
import { changePage, changeRoute } from '../../../modules/route';
import BottomButton from './BottomButton';

interface BoardBottomProps {
    windowId: number;
}

const BoardBottomBlock = styled.div`
    width: 100%;
    height: 80px;
    /* flex: 1; */
    display: flex;
`
const ButtonContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;



const BoardBottom = ({
    windowId, 
}:BoardBottomProps) => {
    const {startPage, lastPage, nowPage, pageLimit} = useAppSelector(state => state.board);
    const dispatch = useAppDispatch();

    // 페이지 버튼 핸들러
    const handleClickButton = (selectPageNum: number) => {
        // 시작 인덱스 = 선택한 페이지가 3 이상일 경우 선택한 값 - 2, 아니면 1
        let startIndex = selectPageNum > 2 ? selectPageNum - 2 : 1;
        // 끝 인덱스 = 선택한 페이지가 3 이상일 경우 선택한값 + 1, 아니면 5
        let endIndex = selectPageNum > 2 ? selectPageNum + 2 : 5;

        // 만약 끝 인덱스가 페이지 최대를 넘어갈 경우
        if (endIndex >= pageLimit){
            // 시작 인덱스를 끝 - 4로 고정
            startIndex = pageLimit - 4;
            // 끝 인덱스를 끝으로 무조건 고정
            endIndex = pageLimit;
        }
        dispatch(changePageState({startPage: startIndex > 0 ? startIndex : 1, lastPage: endIndex, nowPage: selectPageNum}));
        // dispatch(changePage({page: nowPage, windowId}));
        
    }
    // 버튼들 렌더링 해주는 함수
    const renderButtons = () => {
        const buttons: React.ReactNode[] = [];
        for (let i = startPage; i<=lastPage; i++) {
            buttons.push(
                <BottomButton 
                    value = {i} 
                    key = {`BottomButton ${i}`}
                    isThisPage = {i === nowPage ? true : false}
                    onClick={handleClickButton}
                />
            );
        }
        return buttons;
    }
    return (
        <BoardBottomBlock>
            <ButtonContainer>
                {renderButtons()}
            </ButtonContainer>
        </BoardBottomBlock>
    );
}

export default BoardBottom;