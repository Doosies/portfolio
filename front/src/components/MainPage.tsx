import React, {useState} from 'react';
import styled from 'styled-components';
import ClickableObject from './ClickableObject';
import {RiFinderLine, RiTerminalBoxLine, RiMailSendLine, RiProfileLine} from 'react-icons/ri'

interface MainPageProps {
    
}

const MainPageBlock = styled.div`
    width: 100%;
    height: 100%;

    position: static;
    
    display: flex;
    justify-content: center;

`
const ObjectContainer = styled.div`
    padding: 10px;

    position: absolute;
    bottom: 20%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
`;

const MainPage = () => {
    return (
        <MainPageBlock>
            <ObjectContainer>
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
                <ClickableObject 
                    ObjectIcon={RiProfileLine}
                    objectName={'프로필'}
                />
            </ObjectContainer>
        </MainPageBlock>
    );
}

export default MainPage;