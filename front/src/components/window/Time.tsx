import React, {} from 'react';
import styled from 'styled-components';
import useServerTime from '../../hooks/useServerTime';


const TimeBlock = styled.div`
    width: 180px;
    padding-right: 15px;

    position: absolute;
    right: 0;

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