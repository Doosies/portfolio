import React from 'react';
import styled from 'styled-components';
import { ApplicationTypes } from '../../enum/applicationTypes';
import Finder from '../pages/Finder';
import Profile from '../pages/Profile';
import SendMail from '../pages/SendMail';
import Terminal from '../pages/Terminal';

interface WindowMainPageProps {
    windowType: ApplicationTypes;
}

const WindowMainPageBlock = styled.div`
    /* pointer-events: none; */
    /* user-select: none; */
    /* width: 100%; */
    /* height: 100%; */
    /* position: static; */
    padding: 20px;
    border-radius: 20px;

    @media screen and (max-width: 479px){
        /* width: 90vw; */
        width: 90vw;
        height: calc(90vh - 50px);
    }
    @media screen and (min-width: 480px) and (max-width:1023px) {
        width: 480px;
        height: calc(80vh - 50px);
    }
    @media screen and (min-width: 1024px){
        width: 800px;
        height: calc(80vh - 50px);
    }
`
const WindowMainPage = ({
    windowType,
}:WindowMainPageProps) => {
    return (
        <WindowMainPageBlock>
            {windowType === ApplicationTypes.profile && <Profile />}
            {windowType === ApplicationTypes.finder && <Finder />}
            {windowType === ApplicationTypes.sendmail && <SendMail />}
            {windowType === ApplicationTypes.terminal && <Terminal />}
        </WindowMainPageBlock>
    );
}

export default React.memo(WindowMainPage);