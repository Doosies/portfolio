import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import CircleButton from './CircleButton';
import {FiMaximize2, FiMinus, } from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import { ButtonDoing, ButtonSize } from '../../enum/buttonEnum';
import { lighten } from 'polished';
import { ApplicationTypes } from '../../enum/applicationTypes';
import { useAppDispatch } from '../../modules/hooks';
import { removeWindow } from '../../modules/window';
import { removeRouteWindow } from '../../modules/route';

interface WindowTopbarProps {
    windowId: number;
    windowName: string;
    isActive: boolean;
    windowType: ApplicationTypes,
}
const WindowTopbarBlock = styled.div<{isActive: boolean}>`
    position: relative;
    
    width: 100%;
    /* width: 800px; */
    height: 50px;

    border-bottom: 0.5px solid #070707;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    display: flex;
    align-items: center;

    background-color: #2d2d30;
    ${({isActive}) => isActive && css`
        background-color: ${lighten(0.1,'#2d2d30')};
    `}
`;

const WindowControllContainer = styled.div`
    margin-left: 15px;
    height: 20px;
    width: 60px;
    height: 100%;

    display: flex;
    flex-grow: 0;
    align-items: center;
    justify-content: space-around;
    z-index: 1;
`;

const WindowTextContainer = styled.div`
    position: absolute;
    height: 20px;
    width: 100%;
    text-align: center;
    letter-spacing: 5px;
    user-select: none;
`;
const circles = [
    // {color: '#FF5F57', size: ButtonSize.small, doing: ButtonDoing.close, strokeWidth: 90, icon: AiOutlineClose},
    // {color: '#FEBC30', size: ButtonSize.small, doing: ButtonDoing.minimize, strokeWidth: 5, icon: FiMinus},
    // {color: '#25C93E', size: ButtonSize.small, doing: ButtonDoing.maxmize, strokeWidth: 2.8, icon: FiMaximize2},
    {color: '#FF5F57', size: ButtonSize.small, doing: ButtonDoing.close, strokeWidth: 90, icon: AiOutlineClose},
    {color: '#FEBC30', size: ButtonSize.small, doing: ButtonDoing.minimize, strokeWidth: 5, icon: AiOutlineClose},
    {color: '#25C93E', size: ButtonSize.small, doing: ButtonDoing.maxmize, strokeWidth: 2.8, icon: AiOutlineClose},
]

const WindowTopbar = ({
    windowId, windowName, isActive, windowType,
}:WindowTopbarProps) => {
    const dispatch = useAppDispatch();
    const [isOnElement, setOnElement] = useState(false);
    const handleMouseMove = () => void setOnElement(true);
    const handleMouseLeave = () => void setOnElement(false);

    const handleClickControllButton = (doing: ButtonDoing) => {
        switch (doing) {
            case ButtonDoing.close: {
                if (windowType === ApplicationTypes.board){
                    dispatch(removeRouteWindow(windowId));
                }
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
        <WindowTopbarBlock isActive={isActive}>
            <WindowControllContainer 
                onMouseMove={handleMouseMove} 
                onMouseLeave={handleMouseLeave}
            >
                {circles.map(el => 
                    <CircleButton
                        color={el.color}
                        size={el.size}
                        isHover={isOnElement}
                        doing={el.doing}
                        key={`${el.color}+${el.doing}`}
                        windowId={windowId}
                        isActive={isActive}
                        onClick={handleClickControllButton}
                    >
                        <el.icon strokeWidth={el.strokeWidth}/>
                    </CircleButton>
                )}
            </WindowControllContainer>
            <WindowTextContainer>
                {windowName}
            </WindowTextContainer>
        </WindowTopbarBlock>
    );
}

export default React.memo(WindowTopbar);