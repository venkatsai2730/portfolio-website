import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333333;
  color: #ffffff;
`;

const LeftLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #ffffff;
    text-decoration: none;
    margin-left: 350px;
    font-weight: bold;
    transition: color 0.3s;
  }

  a:hover {
    color: #3A86FF;
  }
`;

const RightLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #ffffff;
    text-decoration: none;
    margin-right: 350px;
    font-weight: bold;
    transition: color 0.3s;
  }

  a:hover {
    color: #3A86FF;
  }
`;

const Header = () => (
  <Navbar>
    <LeftLinks>
      <Link to="/">Home</Link>
    </LeftLinks>
    <RightLinks>
      <Link to="/projects">Projects</Link>
    </RightLinks>
  </Navbar>
);

export default Header;
