import React, {useState} from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../modules/hooks';

interface CurrentWindowProps {
    
}

const CurrentWindowBlock = styled.div`
    padding: 10px;
`
const CurrentWindow = () => {
    const nowApplication = useAppSelector(state => state.window.activeWindowName);
    return (
        <CurrentWindowBlock>
            {nowApplication}
        </CurrentWindowBlock>
    );
}

export default React.memo(CurrentWindow);