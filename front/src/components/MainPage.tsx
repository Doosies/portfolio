import React, {useState} from 'react';
import styled from 'styled-components';
import ClickableObject from './ClickableObject';
import {RiFinderLine, RiTerminalBoxLine, RiMailSendLine} from 'react-icons/ri'

interface MainPageProps {
    
}

const MainPageBlock = styled.div`
    padding: 20px;
`
const MainPage = () => {
    return (
        <MainPageBlock>
            <ClickableObject 
                ObjectIcon={RiFinderLine}
                objectName={'탐색기'}
            />
            <ClickableObject 
                ObjectIcon={RiTerminalBoxLine}
                objectName={'터미널'}
            />
            <ClickableObject 
                ObjectIcon={RiMailSendLine}
                objectName={'메일전송'}
            />
        </MainPageBlock>
    );
}

export default MainPage;