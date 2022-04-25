import React  from 'react';
import styled from 'styled-components';
import {GiPear} from 'react-icons/gi';
import CurrentWindow from './window/CurrentWindow';
import Time from './window/Time';

const TopBarBlock = styled.div`
    position: relative;
    height: 40px;
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

export default React.memo(TopBar);