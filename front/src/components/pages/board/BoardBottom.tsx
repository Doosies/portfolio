import React, {useState} from 'react';
import styled from 'styled-components';
import BottomButton from './BottomButton';

interface BoardBottomProps {
    nowPage: number;
}

const BoardBottomBlock = styled.div`
    width: 100%;
    flex: 1;
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
const Button = styled.div`
`;
const BoardBottom = ({
    nowPage, 
}:BoardBottomProps) => {
    return (
        <BoardBottomBlock>
            <ButtonContainer>
                <BottomButton>1</BottomButton>
                <BottomButton>2</BottomButton>
                <BottomButton>3</BottomButton>
                <BottomButton>4</BottomButton>
                <BottomButton>5</BottomButton>
                
            </ButtonContainer>
        </BoardBottomBlock>
    );
}

export default BoardBottom;