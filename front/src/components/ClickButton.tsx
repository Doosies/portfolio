import { darken, lighten } from 'polished';
import React, {} from 'react';
import styled from 'styled-components';

interface ClickButtonProps {
    svgPath?: string;
    children: React.ReactNode;
    color: string;
    onClick: () => void;
}

const ClickButtonBlock = styled.div<{backgroundColor: string}>`
    height: 28px;
    margin-left: 5px;
    background-color: ${({backgroundColor}) => backgroundColor};
    &:hover {
        background-color: ${({backgroundColor}) => lighten(0.1, backgroundColor)};
    }
    &:active {
        background-color: ${({backgroundColor}) => darken(0.1, backgroundColor)};
    }

    display: flex;
    align-items: center;
`
const Img = styled.div`
    width: 28px;
    height: auto;
    padding: 5px;
`;
const Text = styled.div`
    font-size: 12px;
    padding: 10px;
    padding-left: 0;
    user-select: none;
`;
const ClickButton = ({
    svgPath, color, children, onClick
}: ClickButtonProps) => {
    return (
        <ClickButtonBlock 
            backgroundColor={color}
            onClick={onClick}
        >
            <Img>
                <svg role="img" viewBox="0 -5 28 28" xmlns="http://www.w3.org/2000/svg">
                    <title>ClickButton</title>
                    <path d = {svgPath}/>
                </svg>
            </Img>
            <Text>
                {children}
            </Text>        
            
        </ClickButtonBlock>
    );
}

export default ClickButton;