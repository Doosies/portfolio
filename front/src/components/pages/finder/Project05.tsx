import React, {} from 'react';
import styled from 'styled-components';
import DescMain from './DescMain';
import DescSub from './DescSub';


const Project05Block = styled.div`
    width: 100%;
`

const descSubs = [
    '한줄 혹은 여러줄에 걸쳐 주소를 입력하면 화면에 위치가 표시됩니다.',
]
const Project05 = () => {
    return (
        <Project05Block>
            <DescMain 
                title = "songminhyung.com"
                imgPath={`img/project05_main.png`}
                githubLink='https://github.com/Doosies/portfolio'
                pageLink='https://songminhyung.com/'
            >
                처음에는 포토폴리오를 노션에 올리려고 했었습니다.<br/>
                하지만 저만의 포토폴리오를 보여드리고 싶었기 때문에<br/>
                이 사이트를 개발하게 되었습니다.<br/>
                모바일에 디바이스서도 동작 가능하게 개발하였으며<br/>
                상태관리 라이브러리는 redux가 아니라 redux-toolkit 을<br/> 
                사용해 더욱 편하고 빠른 개발이 가능했습니다.<br/><br/>
                소요기간: 2주<br />
                기술스택: react, typescript, redux-toolkit<br />
            </DescMain>
            {descSubs.map((text, i) => 
                <DescSub imgPath={`img/project04_sub0${i+1}.png`}>
                    {text}
                </DescSub>
            )}
        </Project05Block>
    );
}

export default Project05;