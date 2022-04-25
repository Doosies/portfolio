import React, {} from 'react';
import styled from 'styled-components';
import Table from '../table/Table';

interface FinderProps {
    
}

const FinderBlock = styled.div`
    width:100%;
    height: 100%;
    /* background-color: white; */
    /* position: relative; */
    
    
`
const Finder = () => {
    return (
        <FinderBlock>
            <Table />
        </FinderBlock>
    );
}

export default Finder;