import styled from 'styled-components';



export const Project = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin: 1rem;
`

export const ProjectImage = styled.img`
 width: 200px;
 height: auto;
 margin-bottom: 1rem;
`

export const ProjectDescription = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-items: center;
`
export const ProjectTitle = styled.h2`
 color: #f08080;
 font-size: 1.5rem;
 padding: 1rem;
`
export const Description = styled.p`
 font-size: 1rem;
 text-align: center;
 margin-bottom: .5rem;
`

export const Links = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-gap: .5rem;
`

export const Link = styled.a`
 font-size: 1rem;
 padding: 1rem;
 border-radius: 10px;
 background: #f08080;
 cursor: pointer;
 text-decoration: none;
 color: #131313;

 &:hover {
     color: #fff;
 }
`