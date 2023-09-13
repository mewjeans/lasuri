import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Paths from '../../../constant/path';
import Fonts from '../../../styles/fonts';


function NoticePage() {
    const faqData = [
        { id: 1, title: '서비스 사용법', views: 100, author: '작성자1', date: '2023-09-13' },
        { id: 2, title: '전문가 등록 방법', views: 200, author: '작성자2', date: '2023-09-14' },
        { id: 3, title: '로켓 접수 하는 방법', views: 300, author: '작성자3', date: '2023-09-14' },

    ];


    return (
        <NoticeLayout>
            <NoticeContainer>
                <NoticeTitle>
                        <div>
                        <Link to={Paths.faq}>FAQ</Link>
                        </div>
                </NoticeTitle>
                <NoticeSubtitle>
                    <Link to={Paths.faq}>FAQ</Link>
                    <Link to={Paths.notice}>NOTICE</Link>
                </NoticeSubtitle>
                
                <NoticeContent>
                    <NoticeTable>
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
                    </NoticeTable>
                </NoticeContent>
    
            </NoticeContainer>
        </NoticeLayout>
    );
}

const NoticeLayout = styled.div`
background-color: white;
width: 120rem;
margin-top: 7rem;
`;

const NoticeContainer = styled.div`
// background-color: grey;
display: flex;
flex-direction: column;
gap: 4rem;
align-items: center;
`;

const NoticeTitle = styled.div`


div {
    > a {
        ${Fonts.bold24};
    }
}

`;

const NoticeSubtitle = styled.div`
display: flex;
gap: 20rem;

 > a: last-child {
    ${Fonts.bold16};
 }
`;

const NoticeContent = styled.div`
justify-content: center;
width: 100%;
display: flex;
`;


const NoticeTable = styled.table`
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


export default NoticePage;
