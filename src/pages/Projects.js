import React from 'react';
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  osfProject,
<<<<<<< HEAD
  actoKedavraProject,
=======
>>>>>>> 6879d41c654294979a98b1d9b8309aa953e71b21
} from '../components/Examples/Data';
import Example from '../components/Examples/Example';
import styled from 'styled-components';

const Projects = () => {
  const Title = styled.h1`
    color: #f08080;
    font-size: 2.5rem;
    margin: 2rem;
    text-align: center;

    @media screen and (max-width: 500px) {
      font-size: 1.5rem;
    }
  `;

  const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin: 2rem;
  `;

  const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;

    @media screen and (max-width: 750px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
      grid-gap: 0.5rem;
    }
  `;

  return (
    <>
      <Title id='projects'>Projects</Title>
      <ProjectsContainer>
        <ProjectsWrapper>
<<<<<<< HEAD
          <Example {...actoKedavraProject} />
          <Example {...osfProject} />
          <Example {...projectOne} />
          <Example {...projectTwo} />
          <Example {...projectThree} />{/* 
          <Example {...projectFour} /> */}
=======
          <Example {...osfProject} />
          <Example {...projectOne} />
          <Example {...projectTwo} />
          <Example {...projectThree} />
          <Example {...projectFour} />
>>>>>>> 6879d41c654294979a98b1d9b8309aa953e71b21
          <Example {...projectFive} />
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
