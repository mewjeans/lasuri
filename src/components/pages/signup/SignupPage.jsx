import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Fonts from '../../../styles/fonts';
import Colors from '../../../styles/colors';
import Paths from '../../../constant/path';
import mainLogo from '../../../assets/main-logo.png';
import SearchBar from '../../shared/SearchBar';

function SignupPage() {
    return (
        <SignupContainer>
            <p>SignupContainer</p>
        </SignupContainer>
    );
}

const SignupContainer = styled.div`
background-color: white;
`;

export default SignupPage;
