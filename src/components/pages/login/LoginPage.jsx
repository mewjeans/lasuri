import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Fonts from '../../../styles/fonts';
import Colors from '../../../styles/colors';
import Paths from '../../../constant/path';
import mainLogo from '../../../assets/main-logo.png';
import SearchBar from '../../shared/SearchBar';

const REST_API_BASE_URL = 'https://your-api-base-url.com';  // 실제 API의 기본 URL로 변경
const LOGIN_ENDPOINT = '/api/user/login';  // 실제 로그인 엔드포인트로 변

function LoginPage() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    // input data의 변화가 있을 때 value 값을 변경해서 useState 해줌
    const handleInputId = (e) => {
        setInputId(e.target.value);
    };

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };

    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        const userData = {
            email: inputId,
            password: inputPw
        };
    
        axios.post(REST_API_BASE_URL + LOGIN_ENDPOINT, userData)
            .then(response => {
                const responseData = response.data;
    
                if (response.status === 200) {
                    console.log('로그인 성공');
                    // 로그인 성공 시 동작
                } else {
                    console.log('로그인 실패');
                    // 로그인 실패 시 동작
                }
            })
            .catch(error => {
                console.error('에러 발생:', error);
                // 에러 처리
            });
    };
    


    // 페이지 렌더링 후 가장 처음으로 호출
    useEffect(() => {
        axios.get('/')
            .then(res => console.log(res))
            .catch(error => console.error('에러 발생:', error));
    }, []);

    const REST_API_KEY = '0bd2a77e9dafb798825acbc5c7ba83a3';
    const REDIRECT_URI =  'http://localhost:3000/auth/kakao/callback';
    

    const onClickKakaoLogin = () => {
        Kakao.Auth.authorize({
          redirectUri: REDIRECT_URI,
        });
      };

    // export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    

    return (
        <LoginPageContainer>
            <LoginForm>
                <div>
                    <img src={mainLogo} alt="mainlogo" />
                </div>
                <InputContainer>
                    <StyledInput
                        type='text'
                        name='input_id'
                        value={inputId}
                        onChange={handleInputId}
                        placeholder='이메일'
                    />
                </InputContainer>
                <InputContainer>
                    <StyledInput
                        type='password'
                        name='input_pw'
                        value={inputPw}
                        onChange={handleInputPw}
                        placeholder='비밀번호'
                    />
                </InputContainer>
                <ButtonContainer>
                    <LoginButton type='button' onClick={onClickLogin}>로그인</LoginButton>
                </ButtonContainer>
                <ButtonContainer>
                <KakaoLoginButton type='button' onClick={onClickKakaoLogin}>카카오 로그인</KakaoLoginButton>
                </ButtonContainer>
                <ButtonContainer>
                    <div>아직 계정이 없으신가요?</div>
                <Link to={Paths.signup}>
                    <RegisterButton type='button'>
                    회원가입</RegisterButton>
                </Link>
                </ButtonContainer>
            </LoginForm>
        </LoginPageContainer>
    );
}


const InputContainer = styled.div`
    margin-bottom: 0rem;
`;


const StyledInput = styled.input`
    width: 100%;
    height: 4rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    width: 40rem;
    height: 5rem;
    padding: 1rem 2rem;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
    border-radius: 4rem;
    background: #FFF;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;

    > div {
        display: flex;
        align-items: center;
    }
`;

const LoginButton = styled.button`
    padding: 1rem 2rem;
    font-size: 16px;
    background-color: ${Colors.blue300};
    color: white;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    width: 40rem;
    height: 5rem;
    display: flex;

`;

const RegisterButton = styled.button`
    padding: 1rem 2rem;
    font-size: 16px;
    background-color: ${Colors.blue200};
    color: white;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 5rem;
    display: flex;
`;

const KakaoLoginButton = styled.button`
    padding: 1rem 2rem;
    font-size: 16px;
    background-color: #FEE500;
    color: black;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    width: 40rem;
    height: 5rem;
    display: flex;

`;

const LoginPageContainer = styled.main`
padding-top: 4rem;

  > div:nth-child(1) {
    gap: 2rem;
    width: 120rem;
    height: 80rem;
    border-radius: 3rem;
    background: #D1EFF9;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    
    > div:nth-child(1) {
        display: flex;
        margin-bottom: 3rem;

        > img {
            width: 12rem;
            height: 2.5rem;
        }
    }

    > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        
  }
`;

const LoginForm = styled.div`
    width: 40rem;
    background-color: #FFF;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export default LoginPage;
