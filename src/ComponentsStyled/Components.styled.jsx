import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: stretch;
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Button = styled.button`
  height: 32px;
  width: 150px;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#00f')};
  color: #fff;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover,
  &:focus {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#2faa2f')};
    outline: none;
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.05)')};
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
`;


export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  text-align: center;
`;

export const Section = styled.section`
  flex-basis: 33%;
  padding: 20px;
  border-radius: 4px;
  background-color: #f5f5f5;
  text-align: center;

  &:nth-of-type(2) {
    flex-basis: 66%;
  }
`;


export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  width: max-content;
`;

export const UserEmail = styled.p`
  font-weight: 500;
  margin: 0;
`;