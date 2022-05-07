import { response } from 'express';
import React, {useState} from 'react';
import styled from 'styled-components';
import { checkId } from '../../../api/Api';
import { join } from '../../../modules/auth';
// import { checkId, createUser } from '../../../api/Api';
// import { join } from '../../../modules/auth';
import { useAppDispatch } from '../../../modules/hooks';
import { changeRoute, RoutePages } from '../../../modules/route';
import Button from '../../Button';

interface SignUpPageProps {
    windowId: number;
}

const SignUpPageBlock = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const Title = styled.div`
    width: 200px;
    padding-bottom: 5px;
    font-size: 20px;
    border-bottom: 0.1px solid white;
    text-align: center;
`;
const Input = styled.input`
    width: 200px;
    height: 30px;
    line-height: 30px;
`;

const BottomButtonContainer = styled.div`
    width: 200px;
    padding-top: 10px;
    border-top: 0.1px solid white;
    gap: 5px;
`;
const InputContainer = styled.div`
    display: flex;
    gap: 10px;
    display: flex;
    flex-direction: column;

`;
const ButtonText = styled.div`
    font-size: 11px;
`;

const texts = {
    id: {
        normal: '',
        error_duple: '중복된 아이디입니다.',
        error_str: '5~20자의 영문 소문자, 숫자만 사용 가능',
        error_empty: '필수값 입니다.',
        success: '사용 가능합니다.',
    },
    pw: {
        normal: '',
        error_str: '6~20자의 영문자, 숫자, 특수문자를 포함',
        error_empty: '필수값 입니다.',
        success: '사용 가능합니다.',
    },
}

const isPassRegExp = (kind: "id" | "pw", test: string): boolean => {
    // 영문으로 시작하고 숫자가 포함되는 5~20길이
    const idRegExp = /^[a-z0-9]{5,20}$/;
    // 영문, 숫자, 특수문자가 최소1개 포함되는 6~20길이
    const pwRegExp = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{6,20}$/;
    
    if (kind === "id") {
        return idRegExp.test(test);
    }else {
        return pwRegExp.test(test);
    }
}

const SignUpPage = ({
    windowId
}:SignUpPageProps) => {
    const [input, setInput] = useState({
        id: '',
        pw: '',
    });
    const [text, setText] = useState({
        id: texts.id.normal,
        pw: texts.pw.normal,
    });
    const [canSend, setCanSend] = useState({
        id: false,
        pw: false,
    });
    const dispatch = useAppDispatch();

    // 홈화면 클릭
    const handleClickHome = () => {
        dispatch(changeRoute({route: RoutePages.Main, windowId}));
    }
    // 회원가입 클릭
    const handleClickSignUp = async () => {
        
        if (canSend.id && canSend.pw) {                
            dispatch(join({userId: input.id, userPw: input.pw, windowId}));

            // const res = await createUser({userId: input.id, userPw: input.pw});
            // if (res?.status === 200) {
            //     // alert("회원가입 성공! 홈 페이지로 돌아갑니다.");
            //     // dispatch(changeRoute({route: RoutePages.Main, windowId}));
            //     // dispatch(login());
            // }
        }
    }
    
    // 안의 값 바뀔 때 처리
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 입력할 때 마다 해당 칸의 state를 변경해줌.
        setInput({
            ...input,
            [e.target.id]:e.target.value,
        });
        // 비밀번호 적는 칸이 바뀌고 
        if (e.target.id === "pw"){
            // 바뀐값이 정규식을 통과하면
            if (isPassRegExp("pw",e.target.value)) {
                setText({ ...text, pw: texts.pw.success});
            // 정규식을 통과하지 못한다면
            }else {
                setText({ ...text, pw: texts.pw.error_str});
            }
        }
    }
    // 입력 상자 말고 다른곳을 클릭했을 때
    const handleBlurInput = async(e: React.FocusEvent<HTMLInputElement>) => {
        // 이전에 선택한게 id인 경우
        if(e.target.id === 'id'){
            // 일단 못보내는 상태로 처리
            setCanSend({ ...canSend, id: false});
            // text.id가 공백이면 공백에러를 아니면 그상태 그대로 변경
            // setText({...text, 
            //     id: input.id === '' ? texts.id.error_empty : input.id,
            // });
            // id가 제대로 된 값일경우
            if ( isPassRegExp("id", input.id)) {
                // 사용 가능한 아이디: 0, 중복된 아이디: 1
                const canJoin = await checkId(input.id);
                // id가 서버에 전송할 수 없는 값이면
                if (canJoin.data.data ) {                
                    setText({ ...text, id: texts.id.error_duple });
                // // id가 서버에 전송이 가능한 값이라면
                }else {
                //     // text.id를 가능하다고 변경
                    setText({ ...text, id: texts.id.success });
                //     // cansend.id를 전송 가능상태로 변경
                    setCanSend({...canSend, id: true});
                }
            }else {
                // id에 값이 없으면 error_empty 를 띄움
                setText({ ...text, 
                    id: input.id === '' 
                    ? texts.id.error_empty 
                    : texts.id.error_str
                });
            }
        }
        // 이전에 선택한게 pw인 경우
        else if(e.target.id === 'pw'){
            // 일단 못보내는 상태로 처리
            setCanSend({ ...canSend, pw: false});
            // pw가 제대로 된 값이 아닐
            if ( isPassRegExp("pw", input.pw)) {
                // text.pw를 가능하다고 변경
                setText({ ...text, pw: texts.pw.success});
                // cansend.pw를 전송 가능상태로 변경
                setCanSend({ ...canSend, pw: true});
            // 서버에 전송할 수 있는 값일 경우
            }else {
                // pw에 값이 없으면 error_empty를 띄움
                setText({ ...text, 
                    pw: input.pw === '' 
                    ? texts.pw.error_empty
                    : texts.pw.error_str
                });
            }
        }
    }
    
    return (
        <SignUpPageBlock>
            <Title>회원가입</Title>
            <InputContainer>
                <Input 
                    id='id' 
                    onChange={handleChangeInput} 
                    onBlur={handleBlurInput}
                    placeholder='아이디'
                    minLength={5}
                    maxLength={20}
                    value={input.id}
                />
                <ButtonText>
                    {text.id}
                </ButtonText>
            </InputContainer>
            <InputContainer>
                <Input 
                    id='pw' 
                    onChange={handleChangeInput} 
                    onBlur={handleBlurInput}
                    placeholder='비밀번호'
                    minLength={5}
                    maxLength={20}
                    value={input.pw}
                />
                <ButtonText>
                    {text.pw}
                </ButtonText>
            </InputContainer>
            
            <BottomButtonContainer>
                <Button onClick={handleClickSignUp}>
                    회원가입
                </Button>
                <Button onClick={handleClickHome}>
                    홈화면
                </Button>
            </BottomButtonContainer>

        </SignUpPageBlock>
    );
}

export default SignUpPage;