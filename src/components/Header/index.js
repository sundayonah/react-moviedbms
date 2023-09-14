import React from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import Favicon from '../../images/faviconReal.svg';

import { Wrapper, Content, LogoImg, MyLogo, MyAvatar } from './Header.styles';

const Header = () => (
   <Wrapper>
      <Content>
         <Link to="/">
            {/* <LogoImg src={RMDBLogo} alt="rmdb-logo" /> */}
            <MyAvatar>
               <h2>xhunTeq Movie</h2>
            </MyAvatar>
         </Link>
         <MyLogo src={Favicon} alt="tmdb-logo" />
      </Content>
   </Wrapper>
);

export default Header;
