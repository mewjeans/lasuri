import React from 'react';
import LoginPage from '../components/pages/login/LoginPage';
import DefaultLayout from '../components/layout/DefaultLayout';

function Login() {
    return (
        <DefaultLayout>
            <LoginPage />
        </DefaultLayout>
    );
}

export default Login;