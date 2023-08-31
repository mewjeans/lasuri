import React from 'react';
import styled from 'styled-components';
// import Paths from "../../../constant/path";
// import Fonts from "../../../styles/fonts";
import Colors from '../../../styles/colors';
import mainImage from '../../../assets/main-image-2.jpg';
import ServiceBox from '../../shared/ServiceBox';
import ProductBox from '../../shared/ProductBox';

function MainPage() {
    return (
        <Main>
            <div>
                <img src={mainImage} alt='mainimage' />
            </div>
            <ServiceBox />
            <ProductBox />
        </Main>
    );
}

const Main = styled.main`
    background-color: white;
    width: 120rem;

    > div:nth-child(1) {
        width: 120rem;

        > img {
            width: 100%;
            height: 50rem;
            padding: 1rem 0;
            overflow: hidden;
        }
    }

`;


export default MainPage;
