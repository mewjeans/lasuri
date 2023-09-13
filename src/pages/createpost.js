import React from 'react';
import CreatePostPage from '../components/pages/createpost/CreatePostPage';
import DefaultLayout from '../components/layout/DefaultLayout';

function CreatePost() {
    return (
        <DefaultLayout>
            <CreatePostPage />
        </DefaultLayout>
    );
}

export default CreatePost;