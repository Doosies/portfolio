import React, {useState} from 'react';
import styled from 'styled-components';
import useServerTime from '../hooks/useServerTime';

interface TimeProps {
    
}

const TimeBlock = styled.div`
    width: 160px;
    /* height: 100px; */
    position: absolute;
    right: 0;
    /* padding: 15px; */
    /* padding-left: 15px; */
    padding-right: 15px;
    /* margin-right: 15px; */

    display: flex;
    justify-content: space-around;
`
const Time = () => {
    let [date, time] = useServerTime();

    return (
        <TimeBlock>
            <div>{date}</div>
            <div>{time}</div>
        </TimeBlock>
    );
}

export default React.memo(Time);