import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/auth/operations';

//  style

import {
  Container,
  NavWrap,
  Link,
  ContentContainer,
  UserMenuWrapper,
  UserEmail,
  Button,
} from '../../ComponentsStyled/Components.styled';

const Header = () => {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate('/');
    } catch (error) {}
  };

  return (
    <Container>
      <NavWrap>
        <Link to="/">Home</Link>
        {!auth.isLoggedIn && <Link to="/register">Register</Link>}
        {!auth.isLoggedIn && <Link to="/login">Login</Link>}
        {auth.isLoggedIn && <Link to="/contacts">Contacts</Link>}
        {auth.isLoggedIn && (
          <UserMenuWrapper>
            <UserEmail>{auth.user.email}</UserEmail>
            <Button type="button" onClick={handleLogout}>
              Logout
            </Button>
          </UserMenuWrapper>
        )}
      </NavWrap>
      <ContentContainer>{<Outlet />}</ContentContainer>
    </Container>
  );
};

export default Header;
