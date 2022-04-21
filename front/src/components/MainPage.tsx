import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import ClickableObject from './Application';
import {RiFinderLine, RiTerminalBoxLine, RiMailSendLine, RiProfileLine} from 'react-icons/ri'
import Window from './Window';
import Application from './Application';
import { useAppSelector } from '../modules/hooks';
import getRandomKey from '../utility/Random';
import { GiAbstract002 } from 'react-icons/gi';
import getIconFromAppType from '../utility/Icons';

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


const MainPage = () => {
    const applications = useAppSelector(state => state.application.appList);
    const windows = useAppSelector(state => state.window.windowList);
    
    return (
        <MainPageBlock>
            <ApplicationContainer>
                {applications.map ((el) => 
                    <Application 
                        ApplicationIcon={getIconFromAppType(el.applicationType)}
                        applicationName={el.applicationName}
                        applicationType={el.applicationType}
                        key={`${el.applicationName}+${getRandomKey(5)}`}
                    />
                )}
            </ApplicationContainer>
            {windows.map((el) => 
                <Window 
                    windowName={el.windowName}
                    windowType={el.windowType}
                    key={`${el.windowName}+${getRandomKey(5)}`}
                />
            )}
            
        </MainPageBlock>
    );
}

export default MainPage;
