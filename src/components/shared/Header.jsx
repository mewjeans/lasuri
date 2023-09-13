import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import Paths from '../../constant/path';
import mainLogo from '../../assets/main-logo.png';
import SearchBar from './SearchBar';

function Header() {

    return (
        <HeaderContainer>
            <div>
                <div>
                    <Link to={Paths.main}>
                        <img src={mainLogo} alt='main-logo' />
                    </Link>
                    <div>
                        <SearchBar />
                        {/* <div>
                            <input 
                                type='search'
                                placeholder='search'
                                // onChange={onChange}
                             />
                             
                        </div> */}
                        
                        <Link to={Paths.login}>로그인</Link>
                        <Link to={Paths.mypage}>마이페이지</Link>
                    </div>
                </div>

                <Navbar>
                    <div>
                        <Link to={Paths.main}>홈</Link>
                        <Link to={Paths.service}>A/S접수</Link>
                        <Link to={Paths.faq}>FAQ</Link>
                        <Link to={Paths.intro}>회사 소개</Link>
                    </div>
                </Navbar>
            </div>
        </HeaderContainer>
    );
}



const HeaderContainer= styled.header`
display: flex;
flex-direction: column;
align-items: center;

> div {
    width: 120rem;
    height: 12rem;

    > div:nth-child(1) {
        height : 6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        > div:nth-child(1) {
            display: flex;
            gap: 3rem;
            align-items: center;
            ${Fonts.bold14};


        }

        > div:nth-child(2) {
            display: flex;
            gap: 3rem;
            align-items: center;
            ${Fonts.bold14};
            
            > div {
                // 검색창
                width: 27rem;
                height: 4rem;
                border: 1px solid gray;
                border-radius: 7rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: gray;

                > input {
                    display: flex;
                align-items: center;
                justify-content: center;
                }
            }

            > a:nth-child(2) {
                width: 12rem;
                height: 4rem;
                border-radius: 71px;
                background: #2EAAFF;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
    
    > div:nth-child(2) {
        background-color: ${Colors.blue100}
    }
}
`;

const Navbar= styled.div`

    padding-left: 2rem;
    height : 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        display: flex;
        gap: 5rem;
        align-items: center;

        > p {
            ${Fonts.bold14};
        } 
`;



export default Header;