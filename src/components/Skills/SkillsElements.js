import styled from 'styled-components';

export const TechnoContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-items: center;
 margin:2rem;
`

export const Title = styled.h1`
 text-align: center;
 font-size: 2.5rem;
 margin: 1rem;
 color: #f08080;

 @media screen and (max-width: 500px) {
     font-size: 1.5rem;
 }
`

export const TechWrapper = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-gap: 2rem;
 align-items: center;

 @media screen and (max-width: 790px) {
     grid-gap: 1rem;
 }

 @media screen and (max-width: 500px) {
     display: flex;
     flex-direction: column;
     justify-items: center;
 }
`

export const TechTitle = styled.h2`
 justify-self: center;
 font-size: 2rem;
 text-decoration: underline; 

 @media screen and (max-width: 790px) {
     font-size: 1.5rem;
 }

 @media screen and (max-width: 500px) {
     font-size: 1rem;
 }
`

export const SkillContainer = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;

 @media screen and (max-width: 790px) {
     display: grid;
     grid-template-columns: 1fr 1fr;
     grid-gap: 1rem;
 }

`

export const Image = styled.img`
 width: 100px;
 height: auto;
 margin: 0 1.5rem;

 @media screen and (max-width: 500px) {
     width: 50px;
     margin: 0;
 }
`