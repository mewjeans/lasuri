import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Paths from '../../../constant/path';
import Fonts from '../../../styles/fonts';
import Colors from '../../../styles/colors';

function CreatePostPage({ onNewPostCreated }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [posts, setPosts] = useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newPost = {
            id: new Date().getTime(),
            title,
            content,
            date: new Date().toLocaleDateString(),
        };
    
        // 부모 컴포넌트인 FaqPage로 전달한 함수 호출
        onNewPostCreated(newPost); // 이 부분 추가
    
        setTitle('');
        setContent('');
    
        // FAQ 페이지로 이동
        navigate(Paths.Faq);
    };

    return (

        <FaqLayout>
            <FaqContainer>
                <FaqTitle>
                    <Link to={Paths.Faq}>
                        <div>FAQ</div></Link>
                </FaqTitle>
                
                <FaqContent>
                    <form onSubmit={handleSubmit}>
                        <FormField>
                            {/* <label>제목</label> */}
                            <input
                                type="text"
                                value={title}
                                onChange={handleTitleChange}
                                placeholder="제목을 입력하세요"
                                required
                            />
                        </FormField>
                        <FormField>
                            {/* <label>내용</label> */}
                            <textarea
                                value={content}
                                onChange={handleContentChange}
                                placeholder="문의 내용을 입력하세요"
                                required
                            />
                        </FormField>
                        <CreatePostButton type="submit">문의하기</CreatePostButton>
                        
                    </form>
                </FaqContent>



            </FaqContainer>
        </FaqLayout>
    );
}

const FormField = styled.div`
    display: flex;
    flex-direction: column;


    input {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 1rem;
        height: 5rem;
    }

    textarea {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 1rem;
        height: 30rem;
    }
`;

const FaqLayout = styled.div`
    background-color: white;
    width: 120rem;
    margin-top: 7rem;
`;

const FaqContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
`;

const FaqTitle = styled.div`
    a > div {
        ${Fonts.bold24};
    }
`;

const FaqContent = styled.div`
width: 120rem;

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 600px;
        margin: 0 auto;
    }
`;


const CreatePostButton = styled.button`
background-color: ${Colors.blue300};
width: 10rem;
height: 3rem;
border-radius: 2rem;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
border: none;

> div {
    ${Fonts.medium14}
    color: ${Colors.white};
}
`;


export default CreatePostPage;
