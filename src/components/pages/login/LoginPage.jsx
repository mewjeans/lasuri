<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';


function LoginPage() {
    return (
        <LoginPageContainer>
            <p>LoginPage</p>
=======
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
        console.log('로그인 버튼 클릭');

        axios.post('/login', userData)
            .then(response => {
                const responseData = response.data;
                console.log(responseData); // 응답 데이터 확인

                if (responseData && responseData.email) {
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

    return (
        <LoginPageContainer>
            <div>
                <p>Login</p>
                <div>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor='input_id'>ID: </label>
                    <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
                </div>
                <div>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor='input_pw'>PW: </label>
                    <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
                </div>
                <div>
                    <button type='button' onClick={onClickLogin}>Login</button>
                </div>
            </div>
>>>>>>> c02c3fb601353bb7fb2558c39a3f8fa925006f04
        </LoginPageContainer>
    );
}

const LoginPageContainer = styled.main`
<<<<<<< HEAD
background-color: white;
=======
  background-color: white;
>>>>>>> c02c3fb601353bb7fb2558c39a3f8fa925006f04
`;

export default LoginPage;
