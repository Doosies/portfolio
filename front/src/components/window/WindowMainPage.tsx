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
    pointer-events: none;
    user-select: none;
    width: 100%;
    height: 100%;

    padding: 10px;
    border-radius: 20px;
`
const WindowMainPage = ({
    windowType,
}:WindowMainPageProps) => {
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        // 상위 노드로부터의 이벤트 캡쳐링 방지
        e.stopPropagation();
    }
    return (
        <WindowMainPageBlock onMouseDown={handleMouseDown}>
            {windowType === ApplicationTypes.finder && <Profile />}
            {windowType === ApplicationTypes.finder && <Finder />}
            {windowType === ApplicationTypes.finder && <SendMail />}
            {windowType === ApplicationTypes.finder && <Terminal />}
        </WindowMainPageBlock>
    );
}

export default React.memo(WindowMainPage);