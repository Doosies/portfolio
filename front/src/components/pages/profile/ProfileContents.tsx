import styled from 'styled-components';
import StackIcon from '../../StackIcon';

interface ProfileContentsProps {
    
}

const ProfileContentsBlock = styled.div`
    text-align: center;
    

`
const Container = styled.div`
    padding: 5px;
    
    &:nth-child(1) { 
        animation: fadeInDown 0.5s ease-in-out 5s;animation-fill-mode: both; 
    }
    &:nth-child(2) { 
        animation: fadeInDown 0.5s ease-in-out 5.25s;animation-fill-mode: both; 
    }
    &:nth-child(3) { 
        animation: fadeInDown 0.5s ease-in-out 5.5s;animation-fill-mode: both; 
    }
`;
const Title = styled.div`
    font-weight: 500;
    font-size: 15px;
`;
const Content = styled.div`
    font-size: 13px;
    user-select: none;
`;

const ProfileContents = () => {
    return (
        <ProfileContentsBlock>
            <Container>
                <Title>
                    <p> 기술스택 </p>
                </Title>
                <Content>
                    <div>
                        <StackIcon showString='react' iconName='react' color='61DAFB'/>
                        <StackIcon showString='redux' iconName='redux' color='764ABC'/>                
                        <StackIcon showString='mysql' iconName='mysql' color='4479A1'/>
                    </div>
                    <div>
                        <StackIcon showString='typescript' iconName='typescript' color='3178C6'/>
                        <StackIcon showString='javascript' iconName='java' color='F7DF1E'/>
                    </div>
                    <div> 
                        <StackIcon showString='html' iconName='html5' color='E34F26'/>
                        <StackIcon showString='css' iconName='css3' color='1572B6'/>
                    </div>
                </Content>
            </Container>
            <Container>
                <Title>
                    <p> 연락처 </p>
                </Title>
                <Content>
                    <p>010 - 2934 - 1056</p>
                </Content>
            </Container>
            <Container>
                <Title>
                    <p> 이메일 </p>
                </Title>
                <Content>
                    <p>song961003@icloud.com</p>
                </Content>
            </Container>
            

        </ProfileContentsBlock>
    );
}

export default ProfileContents;