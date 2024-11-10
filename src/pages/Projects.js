import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectData = [
  { 
    title: "Scatch", 
    description: "Scatch is a basic model bags-selling website that allows users to browse and purchase bags online.The website is built using MongoDB for data storage, Node.js and Express.js for the backend, and EJS for rendering dynamic HTML content on the frontend. The project demonstrates key features of a basic e-commerce platform, including user authentication and cart management.", 
    gitLink: "https://github.com/venkatsai2730/Scatch"
  },
  { 
    title: " EmpManagePro", 
    description: "The application ensures secure user authentication, allowing only authorized access to sensitive employee data. It offers comprehensive management features, including viewing, searching, creating, editing, and deleting employee records. The user-friendly interface, with search filters and responsive tables, enables HR teams to manage employee data quickly and efficiently.", 
    gitLink: "https://github.com/venkatsai2730/Machine_test"
  },
  { 
    title: "Market-Research-Use-Case-Generation-Agent", 
    description: "Design a Multi-Agent architecture system that generates relevant AI and Generative AI (GenAI) use cases for a given Company or Industry. The system will conduct market research, understand the industry and product, and provide resource assets for AI/ML solutions, focusing on enhancing operations and customer experiences.", 
    gitLink: "https://github.com/venkatsai2730/Market-Research-Use-Case-Generation-Agent"
  },
];

const Projects = () => (
  <div style={{ padding: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
    {projectData.map((project, index) => (
      <ProjectCard 
        key={index} 
        title={project.title} 
        description={project.description} 
        gitLink={project.gitLink} 
      />
    ))}
  </div>
);

export default Projects;
