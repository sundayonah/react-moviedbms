import React from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import {
   Wrapper,
   Content,
   LogoImg,
   TMDBLogoImg,
   MyAvatar,
} from './Header.styles';

const Header = () => (
   <Wrapper>
      <Content>
         <Link to="/">
            {/* <LogoImg src={RMDBLogo} alt="rmdb-logo" /> */}
            <MyAvatar>
               <h2>xhunTeq Movie</h2>
            </MyAvatar>
         </Link>
         {/* <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" /> */}
      </Content>
   </Wrapper>
);

export default Header;
