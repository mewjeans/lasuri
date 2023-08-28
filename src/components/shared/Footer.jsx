import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// // import Fonts from '../../styles/fonts';
// import Paths from '../../constant/path';
import mainLogo from '../../assets/main-logo.png';
import grayLogo from '../../assets/logo-grayscale.png';

function Footer() {
    
    return (
        <FooterContainer>
            <div>
            <img src={grayLogo} alt='gray-logo' />
            </div>
        </FooterContainer>
    );
}


const FooterContainer= styled.footer`
    width: 120rem;
    height: 16rem;
    background: #5E5E5E;
`;


export default Footer;