import React, {useState} from 'react';
import styled from 'styled-components';
import CircleButton, { ButtonDoing, ButtonSize } from './CircleButton';
import {FiMaximize2, FiMinus, } from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
// import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

interface WindowTopbarProps {
    
}

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

const WindowTopbar = () => {
    const [isOnElement, setOnElement] = useState(false);

    const handleMouseMove = () => {
        setOnElement(true);
        console.log("들어왔어");
    }
    const handleMouseLeave = () => {
        setOnElement(false);
        console.log("나갔어");
    }

    return (
        <WindowTopbarBlock>
            <WindowControllContainer 
                onMouseMove={handleMouseMove} 
                onMouseLeave={handleMouseLeave}
            >
                <CircleButton color='#FF5F57' size={ButtonSize.small} isHover={isOnElement} doing={ButtonDoing.close}>
                    <AiOutlineClose strokeWidth={90}/>
                </CircleButton>
                <CircleButton color='#FEBC30' size={ButtonSize.small} isHover={isOnElement} doing={ButtonDoing.minimize}>
                    <FiMinus strokeWidth={5}/>
                </CircleButton>
                <CircleButton color='#25C93E' size={ButtonSize.small} isHover={isOnElement} doing={ButtonDoing.maxmize}>
                    <FiMaximize2 strokeWidth={2.8}/>
                </CircleButton>
            </WindowControllContainer>
        </WindowTopbarBlock>
    );
}

export default WindowTopbar;