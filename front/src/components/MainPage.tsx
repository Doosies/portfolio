import React, {  } from 'react';
import styled from 'styled-components';
import Application from './Application';
import { useAppDispatch, useAppSelector } from '../modules/hooks';
// import getIconFromAppType from '../utility/Icons';
import { ApplicationTypes } from '../enum/applicationTypes';
import { addWindow, WindowState } from '../modules/window';
import Window from './window/Window';
import { getIconFromAppType } from '../utility/Icons';


const MainPageBlock = styled.div`
    /* position: absolute; */
    
    width: 100%;
    height: 100%;
    padding:15px;
    /* position: relative; */

    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;

`
const ApplicationContainer = styled.div`
    padding: 10px;
    position: absolute;
    bottom: 25%;

    display: flex; flex-wrap: wrap;
    justify-content: center;
    align-content: center;
`;

const MainPage = () => {
    const applications = useAppSelector(state => state.application.appList).filter( el => el.applicationType !== ApplicationTypes.internet);
    const windows = useAppSelector(state => state.window.windowList);
    const dispatch = useAppDispatch();

    const handleClickApplication = (
        e: React.MouseEvent<HTMLDivElement>, 
        windowName: string, 
        windowType: ApplicationTypes
    ) => {
        const window: WindowState = {
            windowId: 0,
            zindex: 0,
            windowName,
            windowType,
            isActive: true,
            animationPosition: {x: e.clientX, y: e.clientY},
        };
        dispatch(addWindow(window));

    }
    
    return (
        <MainPageBlock>
            <ApplicationContainer>
                {applications.map ((el, i) => 
                    <Application 
                        ApplicationIcon={getIconFromAppType(el.applicationType)}
                        applicationName={el.applicationName}
                        applicationType={el.applicationType}
                        onClick={handleClickApplication}
                        key={`application:${el.applicationType}`}
                    />
                )}
            </ApplicationContainer>
            {windows.map((el,i) => 
                <Window 
                    // position = {{x:0,y:0}}//{getApplicationPosition(appRefs, el.windowType)}
                    windowName={el.windowName}
                    fullScreen={el.isFullScreen}
                    windowType={el.windowType}
                    windowId={el.windowId}
                    isActive={el.isActive}
                    windowPath={el.windowPath}
                    key={`window:${el.windowId}${el.windowType}`}
                />
            )}
            
        </MainPageBlock>
    );
}

export default React.memo(MainPage);
