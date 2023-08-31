import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import Paths from '../../constant/path';
import mainLogo from '../../assets/main-logo.png';
import serviceIconApply from '../../assets/service-icon-apply.png';
import serviceIconHome from '../../assets/service-icon-home.png';
import serviceIconTime from '../../assets/service-icon-time.png';
import serviceIconSearch from '../../assets/service-icon-search.png';


function ServiceBox() {
    
    return (
        <MainContainer>
            <ServiceCard>
                
                <Link to={Paths.service}>
                    <img src={serviceIconApply} alt="service-icon-apply" />
                    <p>AS 접수</p>
                </Link>
            </ServiceCard>
            <ServiceCard>
                
                <Link to={Paths.service}>
                    <img src={serviceIconSearch} alt="service-icon-search" />
                    <p>전문가 찾기</p>
                </Link>
            </ServiceCard>
            <ServiceCard>
                <Link to={Paths.service}>
                <img src={serviceIconTime} alt="service-icon-time" />
                <p>로켓 접수</p></Link>
            </ServiceCard>
            <ServiceCard>
                <Link to={Paths.service}>
                <img src={serviceIconHome} alt="service-icon-home" />
                <p>주소 검색</p></Link>
            </ServiceCard>
        </MainContainer>
    ); 
}

const MainContainer = styled.div`
display: flex;
gap: 3rem;

`;

const ServiceCard = styled.div`
width: 28rem;
height: 16rem;
border-radius: 1rem;
background-color: ${Colors.blue100};
gap: 1rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


    > a {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        
        > p {
            ${Fonts.medium18}
        }
    }

`;


export default ServiceBox;
