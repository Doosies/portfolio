import {useState} from 'react';
import styled from 'styled-components';
import Row from './Row';


export interface FinderItem {
    text: string;
    date: string;
    stck: string;
    imagePath: string;
}

const TableBlock = styled.div`
    width:100%;
    height:100%;
    font-size: 13px;
`
const TableBody = styled.div`
    /* height: 100%; */
    padding: 10px;
    position: relative;
    overflow: auto;
    @media screen and (max-width: 479px){
        height: calc(90vh - 50px);
    }
    @media screen and (min-width: 480px){// and (max-width:1023px) {
        height: calc(80vh - 50px);
    }
    /* @media screen and (min-width: 1024px){
        height: calc(80vh - 50px - 40px - 10px);
    } */

`;

const Table = () => {
    const [table] = useState<FinderItem[]>([
        {text: '핸드폰 페이지', date: '21.01.23',stck: 'javascript, html, php', imagePath: ''},
        {text: '카운터&투두리스트', date: '21.02.27',stck: 'javascript, react, redux', imagePath: ''},
        {text: '관리자 페이지', date: '21.04.24',stck: 'javascript, react, spring, redux', imagePath: ''},
        {text: '지도 페이지', date: '22.02.10',stck: 'typescript, react, redux', imagePath: ''},
        {text: 'blog.songminhyung.com', date: '22.04.25',stck: 'typscript, react, redux-toolkit', imagePath: ''},
    ]);

    return (
        <TableBlock>
            <TableBody>
                {table.map(el =>
                    <Row item={el} />
                )}
            </TableBody>
            
        </TableBlock>
    );
}

export default Table;