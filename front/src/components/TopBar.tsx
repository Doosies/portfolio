import React, {useState} from 'react';
import styled from 'styled-components';
import Time from './Time';
import {GiPear} from 'react-icons/gi';
import CurrentWindow from './CurrentWindow';

interface TopBarProps {
    // width: 100%;
}

const TopBarBlock = styled.div`
    width: 100%;

    /* padding-left: 15px; */
    padding: 0 15px 0 15px;
    background-color: #3D3C3C;
    display: flex;
    align-items: center;
`;

const MainIcon = styled(GiPear)`
    font-size: 20px;
`;
const TopBar = () => {
    return (
        <TopBarBlock>
            <MainIcon/>
            <CurrentWindow />
            <Time />
        </TopBarBlock>
    );
}

export default TopBar;