import { lighten } from "polished";
import React from "react";
import styled, { css } from "styled-components";
import { ButtonDoing, ButtonSize } from "../../enum/buttonEnum";
import { useAppDispatch } from "../../modules/hooks";
import { removeWindow } from "../../modules/window";


interface CircleButtonProps {
    color: string;
    size: ButtonSize;
    isHover: boolean;
    doing: ButtonDoing;
    children?: React.ReactNode;
    windowId?: number;
    isActive: boolean;
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
const CircleButtonBlock = styled.div<Omit<CircleButtonProps, 'doing' | 'handleButtonClick'>>`
    border-radius: 15px;
    display: flex;
    justify-content: center;
    
    ${({size, color, isActive}) => css`
        background-color: ${isActive ? color : '#4B4C4B'};
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
    color, size, children, isHover, doing, windowId, isActive,
}:CircleButtonProps) => {

    const dispatch = useAppDispatch();

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        // 상위 노드로부터의 이벤트 캡쳐링 방지
        e.stopPropagation();
    }
    const handleButtonClick = () => {
        switch (doing) {
            case ButtonDoing.close: {
                dispatch(removeWindow(windowId));
                break;
            }
            case ButtonDoing.minimize:{
                dispatch(removeWindow(windowId));
                break;
            }
            case ButtonDoing.maxmize:{
                dispatch(removeWindow(windowId));
                break;
            }
            default: break;
        }
    }

    return (
        <CircleButtonBlock 
            size={size} 
            color={color} 
            isHover={isHover}
            onClick={handleButtonClick}
            onMouseDown={handleMouseDown}
            isActive={isActive}
        >
            <ChildBlock>
                {isHover && children}
            </ChildBlock>
        </CircleButtonBlock>
    );
}

export default React.memo(CircleButton);