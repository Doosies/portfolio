
import styled, {  } from 'styled-components';
import { FinderItem } from './Table';

interface RowProps {
    item: FinderItem;
}

const RowBlock = styled.div`
    width: 100%;
    height: 150px;
    /* margin-bottom: 2rem; */

    border-radius: 10px;

    display: flex;
    &:nth-child(2n+2) { background-color: #292727; }

    /* 모바일에선 hover효과 적용 안됨 */
    @media (hover: hover) {
	    &:hover { background-color: #265cff; 
    }
}
`

const ImageContainer = styled.div`
    padding: 0.5rem;
    width: 10rem;
    height: 100%;
    
`;
const DetailContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Detail = styled.div`
    padding-left: 0.5rem;
    padding-bottom: 0.6rem;
    
    p {margin: 0;}
    .title {
        font-size: 1rem;
        font-weight: bold;
        color: #d1d1d1;
    }
    .body {
        font-size: 0.9rem;
        padding-left: 0.6rem;
    }
`;

const title = ['프로젝트 이름', '마지막 수정일', '기술 스택']
const Row = ({
    item,
}: RowProps) => {
    return (
        <RowBlock>
            <ImageContainer>
                <img alt="img" src="img/test.png" style={{width:'100%', height: '100%'}}/>
            </ImageContainer>
            <DetailContainer>
                <Detail>
                    <p className='title'>{title[0]}</p>
                    <p className='body'>{item.text}</p>
                </Detail>    
                <Detail>
                    <p className='title'>{title[1]}</p>
                    <p className='body'>{item.date}</p>
                </Detail>    
                <Detail>
                    <p className='title'>{title[2]}</p>
                    <p className='body'>{item.stck}</p>
                </Detail>    
                
            </DetailContainer>
        </RowBlock>
    );
}

export default Row;