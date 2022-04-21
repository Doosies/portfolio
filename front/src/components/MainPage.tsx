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
import { shallowEqual } from 'react-redux';

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
    const applications = useAppSelector(state => state.application.appList, shallowEqual);
    const windows = useAppSelector(state => state.window.windowList, shallowEqual);
    // console.log(windows);

    
    
    return (
        <MainPageBlock>
            <ApplicationContainer>
                {applications.map ((el, i) => 
                    <Application 
                        ApplicationIcon={getIconFromAppType(el.applicationType)}
                        applicationName={el.applicationName}
                        applicationType={el.applicationType}
                        key={`application:${el.applicationType}`}
                    />
                )}
            </ApplicationContainer>
            {windows.map((el,i) => 
                <Window 
                    windowName={el.windowName}
                    windowType={el.windowType}
                    windowId={el.windowId}
                    key={`window:${el.windowId}${el.windowType}`}
                />
            )}
            
        </MainPageBlock>
    );
}

export default React.memo(MainPage);
