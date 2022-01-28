import styled from 'styled-components';

export const MainPart = styled.section`
 background: #fff;
 display: flex;
 flex-direction: row;
 align-items: flex-start;
 margin-bottom: 4rem;

 @media screen and (max-width: 680px) {
     background: #131313;
     flex-direction: column;
     align-items: center;
     justify-items: center;
}
`

export const MainText = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 justify-content: center;
 width: 70vw;
 height: 70vh;
 background: #131313;
 padding: 0 5rem;

 @media screen and (max-width: 860px) {
     padding: 0 1rem;  
     height: 40vh;  
 } 
`
export const Intro = styled.h1`
 color: #fff;
 font-size: 2.5rem;
 width: 60%;

 @media screen and (max-width: 500px) {
     text-align: center;
     font-size: 1.5rem;
     width: 100%;
 }
`
export const P = styled.p`
 color: #fff;
 font-size: 2rem;
 margin: 1rem 0;
 width: 70%;

 @media screen and (max-width: 500px) {
    font-size: 1rem;
    text-align: center;
    width: 100%;
}
`

export const Name = styled.span`
 margin: 0 1rem;
 font-size: 2.5rem;
 color: #f08080;

 @media screen and (max-width: 500px) {
    font-size: 1.5rem;
}
`

export const MainImage = styled.img`
  -webkit-filter: grayscale(100%); 
  filter: grayscale(100%);
  width: 250px;
  height: auto;
  position: relative;
  right: 145px;
  top: 30px;

  @media screen and (max-width: 680px) {
      position: static;
      width: 30%;
  }

  @media screen and (max-width: 500px) {
      padding-bottom: 1rem;
  }
`