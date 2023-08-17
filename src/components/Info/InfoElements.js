import styled from 'styled-components';

export const InfoContainer = styled.section`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-items: center;
 margin: 1.5rem 0;
`

export const InfoText = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-items: center;
`
export const InfoTitle = styled.h1`
 color: #f08080;
 font-size: 2.5rem;
 margin-bottom: 1rem;

 @media screen and (max-width: 500px) {
     font-size: 1.5rem;
 }
`

export const Infos = styled.p`
 line-height: 2.5rem;
 text-align: center;
 font-size: 1.5rem;
 color: #131313;
 margin: 0 4rem;

 @media screen and (max-width: 500px) {
     font-size: 1rem;
     line-height: 1.2rem;
     text-align: none;
     margin: 0 1rem;
 }
`

export const ContactsWrapper = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-gap: 1rem;
 align-items: center;
 justify-content: flex-start;

 @media screen and (max-width: 450px) {
     grid-template-columns: 1fr 1fr;
     grid-gap: 0;
 }
`

export const Icon = styled.a`
 color: #131313;
 font-size: 3rem;
 margin: 2rem 1rem;
 transition: .3s ease-in;
 text-decoration: none;
 cursor: pointer;

 &:hover {
     color: #f08080;
     transition: .3s ease-in;
 }

 @media screen and (max-width: 450px) {
     font-size: 2rem;
     margin: .5rem;
 }
`

export const CvLink = styled.a`
 font-size: 1.5rem;
 text-decoration: none;
 color: #131313;
 cursor: pointer;
 border-radius: 10px;
 background: #f08080;
 margin: 1rem;
 padding: 1.5rem 2rem;


 &:hover {
    color: #fff;
 } 


 @media screen and (max-width: 450px) {
     font-size: 1rem;
     padding: .8rem 1.2rem;
 }
`