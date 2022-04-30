import React, {useState} from 'react';
import styled from 'styled-components';
import Project01 from './finder/Project01';
import Project02 from './finder/Project02';
import Project03 from './finder/Project03';
import Project04 from './finder/Project04';
import Project05 from './finder/Project05';

interface InternetProps {
    windowPath?: string;
}

const InternetBlock = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    overflow-y: auto;
    
    @media screen and (max-width: 479px){
        padding: 10px;
    }
    @media screen and (min-width: 480px){
        padding: 20px;
    }
`

const getProject = (path?: string): React.ReactNode  => {
    switch (path) {
        case 'project01': return <Project01 />;
        case 'project02': return <Project02 />;
        case 'project03': return <Project03 />;
        case 'project04': return <Project04 />;
        case 'project05': return <Project05 />;
    }
}
const Internet = ({
    windowPath,
}:InternetProps) => {
    return (
        <InternetBlock>
            {getProject(windowPath)}
        </InternetBlock>
    );
}

export default Internet;