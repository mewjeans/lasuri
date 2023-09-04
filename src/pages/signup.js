import React from 'react';
import SignupPage from '../components/pages/signup/SignupPage';
import DefaultLayout from '../components/layout/DefaultLayout';

function SignUp() {
    return (
        <DefaultLayout>
            <SignupPage />
        </DefaultLayout>
    );
}

export default SignUp;