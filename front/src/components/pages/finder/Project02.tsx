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
    '가격을 비교해 가며 원하는 옵션을 선택합니다.',
    '개인정보 입력과 약관 동의를 누른 후 완료합니다.',
    '구매자가 입력한 정보는 판매자에게 발송됩니다.',
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
                처음에 자바스크립트오 html로만 개발을 하다보니<br/>
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
                <DescSub imgPath={`img/project02_sub0${i+1}.png`}>
                    {text}
                </DescSub>
            )}
        </Project02Block>
    );
}

export default Project02;