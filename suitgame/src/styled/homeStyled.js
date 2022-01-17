import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { fadeIn, fadeOut } from 'react-animations'

const fadeIns = keyframes`${fadeIn}`
const fadeOuts = keyframes`${fadeOut}`

export const Container = styled.div`
overflow-y: hidden;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #073763;
    flex-direction: column;
    `
export const Button = styled.button`
    border-radius: 5px;
    padding: 10px 15px 10px 15px;
    border: none;
    cursor: pointer;
    `
export const ButtonClick = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-around;
    @media only screen and (max-width: 768px) {
        width: 90%;
      }
    `
export const Choice = styled.div`
    width: 27%;
    justify-content: space-between;
    display: flex; 
    flex-direction: row;
    animation: 3s ${fadeIns};
    @media only screen and (max-width: 768px) {
        width: 80%;
        
      }
    `
export const ButtonPlay = styled.div`
    border-radius: 5px;
    margin: 20px 0px 0px 0px;
    padding: 10px 15px 10px 15px;
    cursor: pointer;
    background-color: #ddd;
    font-size: 18px;
    font-weight: 700;
    `
export const Result = styled.h1`
    animation: 3s ${fadeIns};
`
export const Txt = styled.p`
      font-size: 36px;
      font-weight: bold;
      @media only screen and (max-width: 768px) {
          font-size: 20px;
          
      }
`