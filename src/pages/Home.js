import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.webp';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #333333;
  padding: 4rem 2rem;
  background: url(${heroImage}) center/cover no-repeat;
  height: 100vh;
`;

const Overlay = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  padding: 2rem;
  backdrop-filter: blur(5px);
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #3A86FF;
`;

const SubHeading = styled.p`
  font-size: 1.2rem;
  color: #333333;
`;

const Home = () => (
  <HomeContainer as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <Overlay>
      <Heading>Welcome to My Portfolio</Heading>
      <SubHeading>Full Stack Developer | AI Enthusiast</SubHeading>
    </Overlay>
  </HomeContainer>
);

export default Home;
