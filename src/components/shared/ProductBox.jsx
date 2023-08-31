import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import Paths from '../../constant/path';
import mainLogo from '../../assets/main-logo.png';
import imageBox from '../../assets/imagebox-small.png';



function ProductBox() {

    const [imageCount, setImageCount] = useState(4); // 이미지 개수 추가


    
    return (
        <ProductContainer>
            <div>우리 동네 수리 업체 찾기</div>
            <div>
                    <ProductCard>
                        <img src={imageBox} alt="imagebox-small" />
                        <div>
                            <div>업체 명</div>
                            <div>지역 명</div>
                        </div>
                    </ProductCard>
                    <ProductCard>
                        <img src={imageBox} alt="imagebox-small" />
                        <div>
                            <div>업체 명</div>
                            <div>지역 명</div>
                        </div>
                    </ProductCard>
                    <ProductCard>
                        <img src={imageBox} alt="imagebox-small" />
                        <div>
                            <div>업체 명</div>
                            <div>지역 명</div>
                        </div>
                    </ProductCard>
                    <ProductCard>
                        <img src={imageBox} alt="imagebox-small" />
                        <div>
                            <div>업체 명</div>
                            <div>지역 명</div>
                        </div>
                    </ProductCard>
            </div>

            <MoreIntroButton>
                <div>
                    <p>더보기</p>
                </div>
                        
            </MoreIntroButton>

        </ProductContainer>
    ); 
}

const MoreIntroButton = styled.button`
display: flex;
justify-content: center;

> div {
    width: 10rem;
    height: 4rem;
    border-radius: 1rem;
    border: 1px solid ${Colors.gray500};
    background: #FFF;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;

    > p {
        color: ${Colors.gray600};
        ${Fonts.medium14};
    }

    &:hover {
        background-color: ${Colors.gray100}/* 마우스 호버 시 배경색 변경 */
    }
}



`;


const ProductContainer = styled.div`
display: flex;
gap: 3rem;
padding-top: 5rem;
flex-direction: column;

    > div:nth-child(1) {
        ${Fonts.bold20}
    }

    > div:nth-child(2) { 
    display: flex;
    gap: 11rem;
    }

`;

const ProductCard = styled.div`
display: flex;
gap: 2.5rem;
flex-direction: column;

> div {

display: flex;
gap: 1.5rem;
flex-direction: column;

    > div:nth-child(1) {
        ${Fonts.bold16}
        
       
    }
    
    > div:nth-child(2) { 
        ${Fonts.medium14}
        color: ${Colors.gray800}
     } 

}
`;


export default ProductBox;
