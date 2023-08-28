import React from 'react';
import styled from 'styled-components';


function MyPage() {
    return (
        <MyPageContainer>
            <p>MyPageContainer</p>
        </MyPageContainer>
    );
}

const MyPageContainer = styled.main`
background-color: white;
`;

export default MyPage;
