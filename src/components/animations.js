import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '../components/animations';

const Intro = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: #444;
`;

const Home = () => (
  <Intro as={motion.div} variants={fadeIn} initial="initial" animate="animate" exit="exit">
    <h1 as={motion.h1} variants={slideUp}>Welcome to My Portfolio</h1>
    <p>Full Stack Developer | AI Enthusiast</p>
  </Intro>
);

export default Home;
