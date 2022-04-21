import React, {useState} from 'react';
import styled from 'styled-components';
import CircleButton from './CircleButton';
import {FiMaximize2, FiMinus, } from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import { ButtonDoing, ButtonSize } from '../enum/buttonEnum';

const WindowTopbarBlock = styled.div`
    width: 100%;
    height: 50px;
    background-color: #2d2d30;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const WindowControllContainer = styled.div`
    height: 20px;
    width: 60px;
    height: 100%;
    padding-left: 15px;

    display: flex;
    flex-grow: 0;
    align-items: center;
    justify-content: space-around;
`;

const circles = [
    {color: '#FF5F57', size: ButtonSize.small, doing: ButtonDoing.close, strokeWidth: 90, icon: AiOutlineClose},
    {color: '#FEBC30', size: ButtonSize.small, doing: ButtonDoing.minimize, strokeWidth: 5, icon: FiMinus},
    {color: '#25C93E', size: ButtonSize.small, doing: ButtonDoing.maxmize, strokeWidth: 2.8, icon: FiMaximize2},
]

const WindowTopbar = () => {
    const [isOnElement, setOnElement] = useState(false);
    const handleMouseMove = () => void setOnElement(true);
    const handleMouseLeave = () => void setOnElement(false);

    return (
        <WindowTopbarBlock>
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
                    >
                        <el.icon strokeWidth={el.strokeWidth}/>
                    </CircleButton>
                )}
            </WindowControllContainer>
        </WindowTopbarBlock>
    );
}

export default WindowTopbar;