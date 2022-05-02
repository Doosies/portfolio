import React from 'react';
import styled, { css } from 'styled-components';
import { ApplicationTypes } from '../../enum/applicationTypes';
import Finder from '../pages/Finder';
import Profile from '../pages/Profile';
import SendMail from '../pages/SendMail';
import Terminal from '../pages/Terminal';
import Internet from '../pages/Internet'
import BoardListPage from '../pages/BoardListPage';

interface WindowMainPageProps {
    windowType: ApplicationTypes;
    windowId: number;
    windowPath?: string;
    isFullScreen?: boolean;
}

const WindowMainPageBlock = styled.div<{isFullScreen?: boolean}>`
    border-radius: 20px;

    @media screen and (max-width: 479px){
        width: 90vw;
        height: calc(90vh - 50px);
    }
    @media screen and (min-width: 480px){
        ${({isFullScreen}) => isFullScreen
        ? css `width: 80vw;  height: calc(90vh - 50px);`
        : css `width: 480px; height: calc(80vh - 50px);`
        }
    }
    @media screen and (min-width: 1000px){
        ${({isFullScreen}) => isFullScreen
        ? css `width: 1000px;  height: calc(90vh - 50px);`
        : css `width: 480px;   height: calc(80vh - 50px);`
        }
    }
`

const WindowMainPage = ({
    windowType, windowId, windowPath, isFullScreen
}:WindowMainPageProps) => {
    // const window
    // console.log(windowPath);
    return (
        <WindowMainPageBlock isFullScreen={isFullScreen}>
            {windowType === ApplicationTypes.profile && <Profile />}
            {windowType === ApplicationTypes.finder && <Finder />}
            {windowType === ApplicationTypes.sendmail && <SendMail windowId={windowId}/>}
            {windowType === ApplicationTypes.terminal && <Terminal />}
            {windowType === ApplicationTypes.internet && <Internet windowPath={windowPath}/>}
            {windowType === ApplicationTypes.board && <BoardListPage/>}
        </WindowMainPageBlock>
    );
}

export default React.memo(WindowMainPage);