import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import Paths from '../../constant/path';
import mainLogo from '../../assets/main-logo.png';

function Header() {
    
    return (
        <HeaderContainer>
            <div>
            <div>
                <Link to={Paths.main}>
                    <img src={mainLogo} alt='main-logo' />
                </Link>
                <div>
                    <div>검색창</div>
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

    > div {
        height : 6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        > div {
            display: flex;
            gap: 3rem;
            align-items: center;
            ${Fonts.bold14};
        }
    }

    
    > div:nth-child(2) {
        background-color: ${Colors.blue100}
    }
}


`;

const Navbar= styled.div`
    
`;



export default Header;