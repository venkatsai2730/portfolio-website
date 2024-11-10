import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333333;
  color: #ffffff;
  text-align: center;
  padding: 1.5rem 2rem;
  margin-top:50px;
  font-size: 0.9rem;
`;

const Footer = () => <FooterContainer>© 2024 My Portfolio. All Rights Reserved.</FooterContainer>;

export default Footer;
