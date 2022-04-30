import React from 'react';
import styled, { css } from 'styled-components';
import { ApplicationTypes } from '../../enum/applicationTypes';
import Finder from '../pages/Finder';
import Profile from '../pages/Profile';
import SendMail from '../pages/SendMail';
import Terminal from '../pages/Terminal';
import Internet from '../pages/Internet'

interface WindowMainPageProps {
    windowType: ApplicationTypes;
    windowId: number;
    windowPath?: string;
}

const WindowMainPageBlock = styled.div<{windowType: ApplicationTypes}>`
    border-radius: 20px;

    @media screen and (max-width: 479px){
        width: 90vw;
        height: calc(90vh - 50px);
    }
    @media screen and (min-width: 480px){
        ${({windowType}) => windowType === ApplicationTypes.internet
        ? css `width: 80vw;  height: calc(90vh - 50px);`
        : css `width: 480px; height: calc(80vh - 50px);`
        }
    }
    @media screen and (min-width: 1000px){
        ${({windowType}) => windowType === ApplicationTypes.internet
        ? css `width: 1000px;  height: calc(90vh - 50px);`
        : css `width: 480px;   height: calc(80vh - 50px);`
        }
    }
`

const WindowMainPage = ({
    windowType, windowId, windowPath,
}:WindowMainPageProps) => {
    // const window
    console.log(windowPath);
    return (
        <WindowMainPageBlock windowType={windowType}>
            {windowType === ApplicationTypes.profile && <Profile />}
            {windowType === ApplicationTypes.finder && <Finder />}
            {windowType === ApplicationTypes.sendmail && <SendMail windowId={windowId}/>}
            {windowType === ApplicationTypes.terminal && <Terminal />}
            {windowType === ApplicationTypes.internet && <Internet windowPath={windowPath}/>}
        </WindowMainPageBlock>
    );
}

export default React.memo(WindowMainPage);