import React from 'react';
import styled from 'styled-components';
// import Paths from "../../../constant/path";
// import Fonts from "../../../styles/fonts";
import mainImage from '../../../assets/main-image-2.jpg';

function MainPage() {
    return (
        <Main>
            <div>
                <img src={mainImage} alt='mainimage' />
            </div>
        </Main>
    );
}

const Main = styled.main`
    background-color: white;
    width: 120rem;

    > div {
        width: 120rem;

        > img {
            width: 100%;
            height: 50rem;
            overflow: hidden;
        }
    }
`;

export default MainPage;
