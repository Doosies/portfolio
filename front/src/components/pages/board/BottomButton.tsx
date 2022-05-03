import React, {useState} from 'react';
import styled, { css } from 'styled-components';

interface BottomButtonProps {
    value: number;
    isThisPage: boolean;
    onClick: (selectPageNum: number) => void;
}

const BottomButtonBlock = styled.div<{isThisPage: boolean}>`
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 20px;

    ${({isThisPage})=> isThisPage && css`
        color:#1E1C1C;
        background-color: white;
    `}

    display: flex;
    justify-content: center;
    align-items: center;


    @media (hover: hover) {
	    &:hover { background-color: #323b89; cursor: pointer;}
    }
`
const BottomButton = ({
    value, onClick, isThisPage,
}:BottomButtonProps) => {
    return (
        <BottomButtonBlock 
            onClick={() => onClick(value)} 
            isThisPage={isThisPage}
        >
            {value}
        </BottomButtonBlock>
    );
}

export default BottomButton;