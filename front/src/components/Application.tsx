import React from 'react';
import styled from 'styled-components';
import { IconType } from 'react-icons/lib';
import { useAppDispatch } from '../modules/hooks';
import { addWindow, WindowState } from '../modules/window';
import { ApplicationTypes } from '../enum/applicationTypes';

interface ApplicationProps {
    applicationName: string;
    applicationType: ApplicationTypes;
    ApplicationIcon: IconType;
}

const ApplicationBlock = styled.div`

    margin: 20px;
    /* padding: 5px; */

    background-color: transparent;
    color: white;
    border: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: all ease-in-out 300ms;

    .Icon {
        font-size: 90px;
    }
    p {
        margin: 0;
        padding: 0px 5px;
        user-select: none;
    }


    &:hover {
        transform: scale(1.15);
        .Icon {
            border: 0.1px solid white;
        }
        p {
            background-color: #0059D0;
        }
    }
`

const Application = ({
    ApplicationIcon,
    applicationName,
    applicationType,
}:ApplicationProps) => {

    const dispatch = useAppDispatch();

    // 힌번 클릭 했을 때
    // 해당 애플리케이션을 열어줌
    const handleClick = () => {
        console.log("Click!!");
        const window: WindowState = {
            position: {x: 0, y: 0},
            windowName: applicationName,
            windowType: applicationType,
        }
        // useAppDispatch(addWindow())
    }

    return (
        <ApplicationBlock onClick={handleClick}>
            <ApplicationIcon className='Icon'/>
            <p>{applicationName}</p>
        </ApplicationBlock>
    );
}

export default Application;