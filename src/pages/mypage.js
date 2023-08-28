import React from 'react';
import MyPage from '../components/pages/mypage/MyPage';
import DefaultLayout from '../components/layout/DefaultLayout';

function MyInfo() {
    return (
        <DefaultLayout>
            <MyPage />
        </DefaultLayout>
    );
}

export default MyInfo;