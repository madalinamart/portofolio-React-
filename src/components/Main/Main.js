import React from 'react';
import {MainPart, MainText, MainImage, Intro, Name ,P} from './MainElements';
import me from '../../images/me.jpg';

const Main = () => {
  return (
      <>
      <MainPart>
      <MainText>
          <Intro>Hi, I'm 
              <Name>Madalina</Name>
          </Intro>
          <P>On my way to become a web developer</P>
      </MainText>
        <MainImage src={me} alt='me' />
      </MainPart>
      </>
  );
};

export default Main;
