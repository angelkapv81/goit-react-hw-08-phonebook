import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import LinearIndeterminate from 'services/LinearIndeterminate';
import { Container, MainNav }  from './SharedLayout.styled';

import Header from 'components/Navbar/Header';



const SharedLayout = () => {
  return (
    <Container>
      <header>
        <MainNav>
          <Header />
        </MainNav>
      </header>

      <Suspense fallback={<LinearIndeterminate />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
