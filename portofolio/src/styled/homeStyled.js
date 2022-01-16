import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
height: 100vh;
`
export const NameDiv = styled.div`
width: 50%;
display: flex; 
align-items: center;
justify-content: center;
flex-direction: column;
@media only screen and (max-width: 768px){
    display: none;
}
`
export const About = styled.div`
width: 50%;
display: flex; 
align-items: center;
justify-content: center;
justify-content: space-between;
padding: 0px 20px 0px 20px;
font-family: 'Playfair Display', serif;
@media only screen and (max-width: 768px){
    width: 100%;
}
`
export const Aboutme = styled.p`
    font-size: 28px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 768px){
        width: 100%;
        flex-direction: column;
    }
    `
export const Icons = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 768px){
        flex-direction: row;
    }
`
export const Name = styled.p`
font-size: 84px;
font-weight: bold;
font-family: 'Playfair Display', serif;
`
export const IconButton = styled.a`
cursor: pointer;
    &:hover {
        background-color: #ddd;
        border-radius: 15px;
    }
    padding: 10px 15px 10px 15px;
`