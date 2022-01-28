import React from 'react';
import css3 from '../../images/css3.svg';
import html5 from '../../images/html5.svg';
import java from '../../images/java.svg';
import javascript from '../../images/javascript.svg';
import mysql from '../../images/mysql.svg';
import php from '../../images/php.svg';
import postgresql from '../../images/postgresql.svg';
import react from '../../images/react.svg';
import { TechnoContainer, Title, TechWrapper, TechTitle, SkillContainer, Image } from './SkillsElements';

const Skills = () => {
  return (
      <TechnoContainer id="technologies">
          <Title>
              Technologies
          </Title>
          <TechWrapper>
             <TechTitle>
                 Backend
              </TechTitle>
                <SkillContainer>
                  <Image src={java} alt='java' />
                  <Image src={php} alt='php' />
                  <Image src={mysql} alt='mysql' />
                  <Image src={postgresql} alt='postgresql' />
                </SkillContainer>
            </TechWrapper>
            <TechWrapper>
              <TechTitle>
                 Frontend
              </TechTitle>
              <SkillContainer>
                  <Image src={html5} alt='html5' />
                  <Image src={css3} alt='css3' />
                  <Image src={javascript} alt='javascript' />
                  <Image src={react} alt='react' />
                  </SkillContainer>
            </TechWrapper>
      </TechnoContainer>
  );
};

export default Skills;
