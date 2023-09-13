import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Paths from '../../../constant/path';
import Fonts from '../../../styles/fonts';
import Colors from '../../../styles/colors';
import CreatePostPage from '../createpost/CreatePostPage';




function FaqPage() {

    const [faqData, setFaqData] = useState([
        { id: 1, title: '질문 1', views: 100, author: '작성자1', date: '2023-09-13' },
        { id: 2, title: '질문 2 빨리 고쳐주세요', views: 200, author: '작성자2', date: '2023-09-14' },
        { id: 3, title: '질문 3입니다 어쩌구 저쩌구', views: 300, author: '작성자3', date: '2023-09-14' },
    ]);

    const location = useLocation();
    const { onNewPostCreated } = location.state || {};

    const [posts, setPosts] = useState([]);

    const handleNewPostCreated = (newPost) => {
        setPosts((prevPosts) => [newPost, ...prevPosts]);
    };
    

    return (
        <FaqLayout>
            <FaqContainer>
                <FaqTitle>
                    <Link to={Paths.Faq}>
                        <div>FAQ</div></Link>
                </FaqTitle>
                <FaqSubtitle>
                    <Link to={Paths.Faq}>FAQ</Link>
                    <Link to={Paths.notice}>NOTICE</Link>
                </FaqSubtitle>
                
                

                <FaqContent>
                    <FaqTable>
                        <thead>
                            <tr>
                            <th>NO</th>
                            <th>제목</th>
                            <th>조회수</th>
                            <th>이름</th>
                            <th>작성일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faqData.map((faq, index) => (
                                <tr key={faq.id}>
                                    <td>{index + 1}</td>
                                    <td>{faq.title}</td>
                                    <td>{faq.views}</td>
                                    <td>{faq.author}</td>
                                    <td>{faq.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </FaqTable>
                </FaqContent>
                
                <CreatePostButton>
                    <div>
                        <Link
                            to={{
                                pathname: Paths.createpost,
                                state: { onNewPostCreated },
                            }}
                        >
                            문의하기
                        </Link>
                    </div>
                </CreatePostButton>


            </FaqContainer>
        </FaqLayout>
    );
}


const CreatePostButton = styled.div`
display: flex;
justify-content: flex-end;
width: 80%;

> div { 
background-color: ${Colors.blue300};
width: 10rem;
height: 3rem;
border-radius: 2rem;
display: flex;
justify-content: center;
align-items: center;

> a {
    ${Fonts.medium14}
    color: ${Colors.white};
}
}

`;

const FaqLayout = styled.div`
background-color: white;
width: 120rem;
margin-top: 7rem;
`;

const FaqContainer = styled.div`
// background-color: grey;
display: flex;
flex-direction: column;
gap: 4rem;
align-items: center;
`;

const FaqTitle = styled.div`

a {
    > div {
        ${Fonts.bold24};
    }
}

`;

const FaqSubtitle = styled.div`
display: flex;
gap: 20rem;

> a: first-child {
    ${Fonts.bold16};
 }
`;

const FaqContent = styled.div`
justify-content: center;
width: 100%;
display: flex;
`;


const FaqTable = styled.table`
    width: 80%;
    border-collapse: collapse;
    

    th, td {
        border: none; 
        border-bottom: 1px solid grey;
        padding: 1rem;
        text-align: center;
    }

    th {
        background-color: white;
        border-top: 1px solid grey;
        ${Fonts.semibold16};
    }

    tbody tr:nth-child(even) {
        background-color: white;
    }
`;


export default FaqPage;
