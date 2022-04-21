import { lighten } from 'polished';
import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import { isPropertySignature } from 'typescript';

export enum ButtonSize {'small','medium','large'};
export enum ButtonDoing {'close', 'minimize', 'maxmize'};
interface CircleButtonProps {
    color: string;
    size: ButtonSize;
    children?: React.ReactNode;
    isHover: boolean;
    doing: ButtonDoing;
}

function getButtonSize (size: ButtonSize): string {
    switch (size) {
        case ButtonSize.small:
            return '13px';
        case ButtonSize.medium:
            return '18px';
        case ButtonSize.large:
            return '23px';
        default:
            return '13px';
    }
}

// omit: <T,string> , T에서 string 제외하고 사용함.
const CircleButtonBlock = styled.div<Omit<CircleButtonProps, 'doing'>>`
    border-radius: 15px;
    display: flex;
    justify-content: center;
    
    ${({size, color}) => css`
        background-color: ${color};
        width: ${getButtonSize(size)};
        height: ${getButtonSize(size)};

        &:active {
            background-color: ${lighten(0.1,color)};
        }
    `}
    ${({color, isHover}) => isHover && css`
        background-color: ${color};
    `}

`
const ChildBlock = styled.div`
    color: black;
    font-size: 8px;
    padding: 1px;
`;

const CircleButton = ({
    color, size, children, isHover, doing
}:CircleButtonProps) => {
    const handleButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    }
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        // 상위 노드로부터의 이벤트 캡쳐링 방지
        e.stopPropagation();
    }
    return (
        <CircleButtonBlock 
            size={size} 
            color={color} 
            isHover={isHover}
            onClick={handleButtonClick}
            onMouseDown={handleMouseDown}
        >
            <ChildBlock>
                {isHover && children}
            </ChildBlock>
        </CircleButtonBlock>
    );
}

export default CircleButton;