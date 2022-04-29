import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import WindowMainPage from './WindowMainPage';
import WindowTopbar from './WindowTopbar';
import { ApplicationTypes } from '../../enum/applicationTypes';
import { useAppDispatch, useAppSelector } from '../../modules/hooks';
import { mouseDownWindow } from '../../modules/window';
import Draggable from '../Draggable';

interface WindowProps {
    windowName: string;
    windowType: ApplicationTypes;
    fullScreen?: boolean;
    windowId: number;
    isActive: boolean,
    windowPath?: string;
}

const WindowBlock = styled.div<{fullScreen?: boolean}>`
    background-color: #1E1C1C;
    border-radius: 20px;
    box-shadow: -5px 5px 20px -10px black;
    border: 0.1px solid #6D6C6D;

    // 만약 전체창이면
    ${({fullScreen}) => fullScreen && css `
        width: 90vw;
        height: 90vh;
    `}
    @media screen and (max-width: 479){
        @keyframes smoothAppear {
            from { opacity: 0; transform: translateY(50%) scale(0.1); }
            to { opacity: 1; transform: scale(1);}
        }
    }
    @media screen and (min-width: 480px) {
        @keyframes smoothAppear {
            from { opacity: 0; transform: translateY(200px) scale(0.1); }
            to { opacity: 1; transform: scale(1);}
        }
    }
`



const Window = ({
    windowName, windowType, windowId, isActive, fullScreen, windowPath
}:WindowProps) => {
    const [animation] = useState('smoothAppear 300ms');
    const window = useAppSelector(state => state.window.windowList.find( el => el.windowId === windowId));
    const dispatch = useAppDispatch();
    const handleDown = () => { dispatch(mouseDownWindow(windowId)); }
    return (
        <Draggable
            zIndex={window?.zindex}
            onMouseDown={handleDown}
            style={{animation: animation}}
        >
            <WindowBlock fullScreen={fullScreen}>
                <WindowTopbar 
                    windowId={windowId}
                    windowName={windowName}
                    isActive={isActive}
                />
                <WindowMainPage 
                    windowType={windowType}
                    windowId={windowId}
                    windowPath={windowPath}
                />
            </WindowBlock>
        </Draggable>
    );
}

export default React.memo(Window);