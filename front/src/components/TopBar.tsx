import React, {useState} from 'react';
import styled from 'styled-components';
import Time from './Time';
import {GiPear} from 'react-icons/gi';
import CurrentWindow from './CurrentWindow';

interface TopBarProps {
    
}

const TopBarBlock = styled.div`
    width: 100%;
    height: 30px;
    padding: 0 10px 0 10px;
    background-color: #666666;
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