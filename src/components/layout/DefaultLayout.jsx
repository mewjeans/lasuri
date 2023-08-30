import React from 'react';
import styled from 'styled-components';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

function DefaultLayout(props) {
    return (
        <>
            <Header />
            <Layout>{props.children}</Layout>
            <Footer />
        </>
    );
}

const Layout = styled.main`
    width:  120rem;
    height: 50rem;
    margin: 0 auto;
`;


export default DefaultLayout;