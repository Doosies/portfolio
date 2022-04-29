import React from 'react';
import styled from 'styled-components';
import { ApplicationTypes } from '../../enum/applicationTypes';
import Finder from '../pages/Finder';
import Project01 from '../pages/finder/Project01';
import Project02 from '../pages/finder/Project02';
import Project03 from '../pages/finder/Project03';
import Project04 from '../pages/finder/Project04';
import Project05 from '../pages/finder/Project05';
import Profile from '../pages/Profile';
import SendMail from '../pages/SendMail';
import Terminal from '../pages/Terminal';

interface WindowMainPageProps {
    windowType: ApplicationTypes;
    windowId: number;
    windowPath?: string;
}

const WindowMainPageBlock = styled.div`
    border-radius: 20px;

    @media screen and (max-width: 479px){
        width: 90vw;
        height: calc(90vh - 50px);
    }
    @media screen and (min-width: 480px){
        width: 480px;
        height: calc(80vh - 50px);
    }
`

const getProject = (path?: string): React.ReactNode  => {
    switch (path) {
        case 'project01': return <Project01 />;
        case 'project02': return <Project02 />;
        case 'project03': return <Project03 />;
        case 'project04': return <Project04 />;
        case 'project05': return <Project05 />;
    }
}
const WindowMainPage = ({
    windowType, windowId, windowPath,
}:WindowMainPageProps) => {
    // const window
    console.log(windowPath);
    return (
        <WindowMainPageBlock>
            {windowType === ApplicationTypes.profile && <Profile />}
            {windowType === ApplicationTypes.finder && <Finder />}
            {windowType === ApplicationTypes.sendmail && <SendMail />}
            {windowType === ApplicationTypes.terminal && <Terminal />}
            {windowType === ApplicationTypes.internet && getProject(windowPath)}
        </WindowMainPageBlock>
    );
}

export default React.memo(WindowMainPage);