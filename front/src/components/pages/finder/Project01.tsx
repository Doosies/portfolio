import React, {} from 'react';
import styled from 'styled-components';
import DescMain from './DescMain';
import DescSub from './DescSub';

interface Project01Props {
    
}

const Project01Block = styled.div`
    width: 100%;
`
const descSubs = [
    '가격을 비교해 가며 원하는 옵션을 선택합니다.',
    '개인정보 입력과 약관 동의를 누른 후 완료합니다.',
    '구매자가 입력한 정보는 판매자에게 발송됩니다.',
]
const Project01 = () => {
    return (
        <Project01Block>
            <DescMain 
                title = "SK TELECOM 판매 페이지"
                imgPath={`img/project01_main.png`}
                githubLink='https://github.com/Doosies/ppap'
                pageLink='https://songminhyung.com/sktel'
            >
                태어나서 처음으로 제작하고 서비스 해본 웹페이지 입니다.<br/>
                1년전, 아버지가 핸드폰 판매를 하셨을 때<br/>
                웹페이지가 빨리 필요하다고 하셔서 html, css, javascript<br/>
                세가지의 기초에대해 습득해가며 개발한 웹페이지 입니다.<br/>
                DB가 필요했지만 시간이 모자랐기에 웹페이지에서 필요한 <br />
                데이터는 모두 액셀파일에서 로딩 후 화면에 그려줬습니다.<br/>
                그리고 사용자가 핸드폰 구매 페이지 작성을 완료하면<br/>
                작성된 정보는 핸드폰 판매자의 메일로 전송됩니다.,<br/><br/>
                소요기간: 2달<br />
                기술스택: html, css, javascript, php<br />
            </DescMain>
            {descSubs.map((text, i) => 
                <DescSub imgPath={`img/project01_sub0${i+1}.png`}>
                    {text}
                </DescSub>
            )}
        </Project01Block>
    );
}

export default Project01;