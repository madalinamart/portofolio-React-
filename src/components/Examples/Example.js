import React from 'react';
import {
  Project,
  ProjectImage,
  ProjectDescription,
  ProjectTitle,
  Description,
  Links,
  Link,
} from './ExampleElements';
import { FiGithub, FiCode } from 'react-icons/fi';

const Example = ({ img, alt, title, description, githubLink, projectLink }) => {
  return (
    <Project>
      <ProjectImage src={img} alt={alt} />
      <ProjectDescription>
        <ProjectTitle>{title}</ProjectTitle>
        <Description>{description}</Description>
        <Links>
          <Link href={githubLink} target='_blank'>
            {' '}
            <FiGithub />{' '}
          </Link>

          <Link href={projectLink} target='_blank'>
            {' '}
            <FiCode />{' '}
          </Link>
        </Links>
      </ProjectDescription>
    </Project>
  );
};

export default Example;
