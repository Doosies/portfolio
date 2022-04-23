import React, { useState } from 'react';
import styled from 'styled-components';
import WindowMainPage from './WindowMainPage';
import WindowTopbar from './WindowTopbar';
import { ApplicationTypes } from '../../enum/applicationTypes';
import { useAppDispatch, useAppSelector } from '../../modules/hooks';
import { mouseDownWindow } from '../../modules/window';
import Draggable from '../Draggable';

interface WindowProps {
    windowName: string;
    windowType: ApplicationTypes;
    windowId: number;
    isActive: boolean,
}

const WindowBlock = styled.div`

    background-color: #262628;
    border-radius: 20px;
    box-shadow: -5px 5px 20px -10px black;


    @media screen and (max-width: 1023px){
        height: 85vh;
        width: 85vw;
        @keyframes smoothAppear {
            from { opacity: 0; transform: translateY(50%) scale(0.1); }
            to { opacity: 1; transform: scale(1);}
        }
    }
    @media screen and (min-width: 1024px) {
        height: 80vh;
        width: 800px;
        @keyframes smoothAppear {
            from { opacity: 0; transform: translateY(200px) scale(0.1); }
            to { opacity: 1; transform: scale(1);}
        }
    }
`



const Window = ({
    windowName, windowType, windowId, isActive
}:WindowProps) => {
    const [animation, setAnimation] = useState('smoothAppear 300ms');
    const window = useAppSelector(state => state.window.windowList.find( el => el.windowId === windowId));
    const dispatch = useAppDispatch();
    const handleDown = () => { dispatch(mouseDownWindow(windowId)); }
    return (
        <Draggable
            zIndex={window?.zindex}
            onMouseDown={handleDown}
            style={{animation: animation}}
        >
            <WindowBlock  >
                <WindowTopbar 
                    windowId={windowId}
                    windowName={windowName}
                    isActive={isActive}
                />
                <WindowMainPage />
            </WindowBlock>
        </Draggable>
    );
}

export default React.memo(Window);