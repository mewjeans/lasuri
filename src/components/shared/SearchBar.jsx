import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import Paths from '../../constant/path';
import mainLogo from '../../assets/main-logo.png';

function SearchBar() {
    
    return (
        <SearchbarContainer>
            <div>
                <input 
                    type='search'
                    placeholder='search'
                    // onChange={onChange}
                />
                             
            </div>
        </SearchbarContainer>
    ); 
}

const SearchbarContainer = styled.div`

`;

export default SearchBar;

