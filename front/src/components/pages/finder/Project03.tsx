import React, {} from 'react';
import styled from 'styled-components';
import DescMain from './DescMain';
import DescSub from './DescSub';

interface project03Props {
    
}

const Project03Block = styled.div`
    width: 100%;
`

const descSubs = [
    '데이터의 추가가 가능합니다.',
    '데이터의 변경이 가능합니다',
    '데이터의 삭제가 가능합니다',
    '필수값인데 입력하지 않았으면 해당 값을 포커싱 합니다',
    '값의 입력 형식이 다르면 포커싱을 하며 모달창을 띄웁니다.'
]
const project03 = () => {
    return (
        <Project03Block>
            <DescMain 
                title = "Admin 페이지"
                imgPath={`img/project03_main.png`}
                githubLink='https://github.com/Doosies/sktelProjt'
                pageLink='https://songminhyung.com/admin'
            >
                TodoList 개발을 끝낸 후 핸드폰 판매 페이지를 제작하기 전에<br/>
                페이지를 관리할 어드민 페이지를 제작했습니다.<br/>
                하지만 도중에 판매페이지가 더 이상 필요하지 않게 되어<br/>
                프로젝트는 만드는 도중에 끝나게 뙛지만 그 과정에서<br/>
                Spring 과 SQL을 배우게 됐습니다.<br/><br/>
                소요기간: 6주<br />
                기술스택: react, typescript, redux, spring, sql<br />
            </DescMain>
            {descSubs.map((text, i) => 
                <DescSub imgPath={`img/project03_sub0${i+1}.png`}>
                    {text}
                </DescSub>
            )}
        </Project03Block>
    );
}

export default project03