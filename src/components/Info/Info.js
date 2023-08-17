import React from "react";
import { FiLinkedin, FiGithub, FiFacebook } from "react-icons/fi";
import {
  InfoContainer,
  InfoText,
  InfoTitle,
  Infos,
  ContactsWrapper,
  Icon,
  CvLink,
} from "./InfoElements";
import resume from "../../resume/Resume.pdf";

const Info = () => {
  return (
    <>
      <InfoContainer id="about">
        <InfoText>
          <InfoTitle>My story</InfoTitle>
          <Infos>
            <p>
              I'm currently a student in the last year at the Computer Science
              University of Turin. Really passionate about web developing and,
              particularly, the front-end part of it.{" "}
            </p>
            <p>
              I have learned how to use many different technologies and still
              learning new ones everyday.{" "}
            </p>
            <p>I love working individually as well as within a team.</p>
            <p>
              If this sounds interesting to you, contact me on any of my social
              media accounts!
            </p>
          </Infos>
        </InfoText>
        <ContactsWrapper>
          <Icon
            href="https://www.linkedin.com/in/madalina-martiniuc-8043b419b/"
            target="_blank"
          >
            <FiLinkedin />
          </Icon>
          <Icon href="https://github.com/madalinamart" target="_blank">
            <FiGithub />
          </Icon>
          {/* 
    <Icon href="https://www.instagram.com/m.madaliina/" target="_blank">
    <FiInstagram />
    </Icon> */}
          <Icon
            href="https://www.facebook.com/profile.php?id=100011402834068"
            target="_blank"
          >
            <FiFacebook />
          </Icon>
        </ContactsWrapper>
        <Infos>
          <p>Also, view and download my resume.</p>
        </Infos>
        <CvLink href={resume} target="_blank">
          Resume
        </CvLink>
      </InfoContainer>
    </>
  );
};

export default Info;
