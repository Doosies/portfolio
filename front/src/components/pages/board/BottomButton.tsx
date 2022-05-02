import React, {useState} from 'react';
import styled from 'styled-components';

interface BottomButtonProps {
    children: React.ReactNode;
}

const BottomButtonBlock = styled.div`
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 20px;
    background-color: white;
    color:#1E1C1C;

    display: flex;
    justify-content: center;
    align-items: center;
`
const BottomButton = ({
    children, 
}:BottomButtonProps) => {
    return (
        <BottomButtonBlock>
            {children}
        </BottomButtonBlock>
    );
}

export default BottomButton;