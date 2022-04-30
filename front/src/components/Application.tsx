import React from 'react';
import styled from 'styled-components';
import { IconType } from 'react-icons/lib';
import { ApplicationTypes } from '../enum/applicationTypes';

interface ApplicationProps {
    applicationName: string;
    applicationType: ApplicationTypes;
    ApplicationIcon: IconType;
    onClick: (e: React.MouseEvent<HTMLDivElement>, windowName: string, windowType: ApplicationTypes) => void;
}

const ApplicationBlock = styled.div`

    background-color: transparent;
    color: white;
    border: 0;
    padding:10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: all ease-in-out 300ms;

    .Icon {
        font-size: 70px;
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
            /* background-color: #0059D0;b */
            background-color: #323b89;
        }
    }

    width: 33%;
    /* @media screen and (max-width: 479px){
        width: 40%;
    }
    @media screen and (min-width: 480px) {
        width: 95px;
    }    */
`

const Application = ({
    ApplicationIcon,
    applicationName,
    applicationType,
    onClick,
}:ApplicationProps) => {


    return (
        <ApplicationBlock 
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {onClick(e, applicationName, applicationType)}}
            // ref = {(el) => (refs.current as HTMLDivElement[])[refIdx] = el as HTMLDivElement}
        >
            <ApplicationIcon className='Icon'/>
            <p>{applicationName}</p>
        </ApplicationBlock>
    );
}

export default React.memo(Application);