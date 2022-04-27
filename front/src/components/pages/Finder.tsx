
import styled from 'styled-components';
import Table from '../table/Table';


const FinderBlock = styled.div`
    width:100%;
    height: 100%;
    
`
const Finder = () => {
    return (
        <FinderBlock>
            <Table />
        </FinderBlock>
    );
}

export default Finder;