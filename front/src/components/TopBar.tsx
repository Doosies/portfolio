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
    background-color: #3D3C3C;
    display: flex;
    align-items: center;
`;

const MainIcon = styled(GiPear)`
    font-size: 20px;
    margin-left: 15px;
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