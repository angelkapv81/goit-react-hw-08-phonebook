import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: red;
  display: inline-block;
  padding: 10px 15px;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;

  &.active {
    font-weight: bold;
  }
`;