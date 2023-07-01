import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Container, Menu} from './Navbar.styled'

import { isUserLogin } from 'redux/auth/auth-selectors';
import items from './items_';
import NavbarAuth from './NavbarAuth';
import UserMenu from './UserMenu';


const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <Link to={link}>
        {text}
      </Link>
    </li>
  ));

  return (
    <Container>
      <Menu>{elements}</Menu>
      {!isLogin && <NavbarAuth />}
      {isLogin && <UserMenu />}
    </Container>
  );
};

export default Navbar;
