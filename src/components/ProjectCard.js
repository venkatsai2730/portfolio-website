import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const Card = styled.div`
  width: 340px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center-align content */
  background: linear-gradient(145deg, #f0f0f0, #ffffff);
  border: 1px solid #dddddd;
  border-radius: 12px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(255, 255, 255, 0.7);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.15), -6px -6px 15px rgba(255, 255, 255, 0.8);
  }
`;

const Title = styled.h2`
  color: #3A86FF;
  font-size: 1.75rem;
  text-align: center; /* Center the title */
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  color: #4a4a4a;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center; /* Center the description */
  margin-bottom: 1.5rem;
`;

const GitLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  padding: 0.75rem;
  font-size: 1rem;
  color: #ffffff;
  background: linear-gradient(90deg, #3A86FF, #4CC9F0);
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    background: linear-gradient(90deg, #FF6B6B, #FF9A9A);
    transform: scale(1.05);
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const ProjectCard = ({ title, description, gitLink }) => (
  <Card>
    <Title>{title}</Title>
    <Description>{description}</Description>
    {gitLink && (
      <GitLink href={gitLink} target="_blank" rel="noopener noreferrer">
        <FaGithub size={20} /> View on GitHub
      </GitLink>
    )}
  </Card>
);

export default ProjectCard;
