import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import ClickableObject from './Application';
import {RiFinderLine, RiTerminalBoxLine, RiMailSendLine, RiProfileLine} from 'react-icons/ri'
import Window from './Window';
import Application from './Application';
import { useAppSelector } from '../modules/hooks';

interface MainPageProps {
    
}
// export type WindowRefType = React.MutableRefObject<{}>;

const MainPageBlock = styled.div`
    width: 100%;
    height: 100%;

    position: static;

    display: flex;
    justify-content: center;

`
const ApplicationContainer = styled.div`
    padding: 10px;

    position: absolute;
    bottom: 20%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
`;

const Applications = [
    { ObjectIcon: RiFinderLine, ObjectName: '탐색기' },
    { ObjectIcon: RiTerminalBoxLine, ObjectName: '터미널' },
    { ObjectIcon: RiMailSendLine, ObjectName: '메일전송' },
    { ObjectIcon: RiProfileLine, ObjectName: '프로필' },
]

const MainPage = () => {
    // const refs = useRef({});
    
    // const [windows, setWindows] = useState([]);
    const applications = useAppSelector(state => state.application)

    return (
        <MainPageBlock>
            <ApplicationContainer>
                {applications.map (el => 
                    <Application 
                        ObjectIcon={el.applicationIcon}
                        objectName={el.applicationName}
                        key={el.applicationName}
                    />
                )}
            </ApplicationContainer>
            
        </MainPageBlock>
    );
}

export default MainPage;