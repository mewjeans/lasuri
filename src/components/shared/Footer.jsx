import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Fonts from '../../styles/fonts';
// import Paths from '../../constant/path';
import mainLogo from '../../assets/main-logo.png';
import grayLogo from '../../assets/logo-grayscale.png';

function Footer() {
    
    return (
        <FooterContainer>
            <div>
                <img src={grayLogo} alt='gray-logo' />
                <div>
                    <p>고객 이용약관</p>
                    <p>개인정보처리방침</p>
                </div>
                <div>
                    <p>(주)세연시스템즈 | 서울 구로시 마리오 타워 -- | 통신판매 번호 : 000000</p>
                    <p>사업자 등록 번호 : 00000 | 연락처 : 02-1234-5678</p>
                    <p>대표 이사 : 홍길동</p>
                    <p>COPYRIGHTS (C)</p>
                </div>
            </div>
        </FooterContainer>
    );
}


const FooterContainer= styled.footer`
display: flex;
justify-content: center;  
padding: 2rem 0;

    > div {
        background: #5E5E5E;
        width: 120rem;
        height: 24rem;
        display: flex;
        gap: 2rem;
        flex-direction: column;
        color: #A49D9D;
        padding: 4rem 10rem;
        
        > img {
            width: 20rem;
            height: 3rem;
            justify-content: flex-start;
        }

        > div:nth-child(2) {
            display: flex;
            gap: 2rem;

            > p {
                ${Fonts.semibold16};
                line-height: 1.9rem; 
            }
            
            
        }

        > div:nth-child(3) {
            display: flex;
            gap: 1rem;
            flex-direction: column;
            

            > p {
                ${Fonts.medium12};
            }
        }
    }
`;


export default Footer;