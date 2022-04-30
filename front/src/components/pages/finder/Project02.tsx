import React, {} from 'react';
import styled from 'styled-components';
import DescMain from './DescMain';
import DescSub from './DescSub';

interface Project02Props {
    
}

const Project02Block = styled.div`
    width: 100%;
`

const descSubs = [
    '새로운 할일 추가합니다.',
    '한개를 제외한 모든 리스트를 제거합니다.',
    '한개의 할일을 추가 후 완료로 바꿉니다. ',
]
const Project02 = () => {
    return (
        <Project02Block>
            <DescMain 
                title = "카운터,투두리스트 페이지"
                imgPath={`img/project02_main.png`}
                githubLink='https://github.com/Doosies/router-study'
                pageLink='https://songminhyung.com/cnd'
            >
                처음에 자바스크립트와 html로만 개발을 하다보니<br/>
                확장성에 한계를 느껴 리액트 프레임워크 학습을 목표로<br/>
                제작하게된 카운터, 투두리스트 페이지입니다.<br/>
                기능은 다른 투두리스트 앱과 동일하게 일정의 추가,삭제<br/>
                그리고 완료 표시를 할 수 있습니다. <br />
                페이지의 데이터 관리는 Redux로 store 한개를 생성해서<br/>
                그곳에서 모두 관리해 주었습니다.<br/><br/>
                소요기간: 1주<br />
                기술스택: react, javascript, redux<br />
            </DescMain>
            {descSubs.map((text, i) => 
                <DescSub imgPath={`img/project02_sub0${i+1}.png`} key={text}>
                    {text}
                </DescSub>
            )}
        </Project02Block>
    );
}

export default Project02;