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
    /* height: 30px; */

    padding-left: 15px;
    background-color: #666666;
    display: flex;
    align-items: center;
`;

const MainIcon = styled(GiPear)`
    font-size: 20px;
    /* padding: 10px */
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