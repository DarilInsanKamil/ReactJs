import styled from "styled-components";

const Colors = {
    primary: "#1F1D2B",
    secondary: "#252836",
    text: "#92949B",
    highlight: "#fff"
}

export { Colors }

export const Container = styled.div`
    background-color: #1F1D2B;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`
export const SubContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    @media only screen and (max-width: 576px) {
        width: 100%;
    }
`
export const Lines = styled.div`
    width: 1px;
    height: 24px;
    background-color: #92949B;
`
export const LinesH = styled.div`
    width: 80px;
    margin: 20px 0px 60px 0px;
    height: 2px;
    background-color: #92949B;
    border-radius: 8px;
    @media only screen and (max-width: 576px) {
        margin: 20px 0px 20px 0px;
        width: 40px;
        height: 1px;
    }
`
export const Head = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Images = styled.img`
    width: 170px;
    height: 170px;
    margin-top: 20px;
    border-radius: 100px;
`
export const QuickAbout = styled.div`
    width: 545px;
    line-height: 27px;
    padding: 10px;
    @media only screen and (max-width: 576px) {
        width: 100%;
    }
`
export const Text = styled.p`
    text-align: ${props => props.align || "left"};
    font-size: ${props => props.size || "18px"};
    font-weight: ${props => props.weight || "normal"};
    color: ${props => props.color || "#fff"};
    font-family: 'Poppins', sans-serif;
    margin: 0px;
`
export const ProjectandBlog = styled.div`
    background-color: #252836;
    width: 100%;
    border-top-left-radius: 100px; 
    border-top-right-radius: 100px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    @media only screen and (max-width: 576px) {
        border-top-left-radius: 56px; 
        border-top-right-radius: 56px; 
    }
`
    export const Project = styled.div`
    display: flex;
    width: 441px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    @media only screen and (max-width: 576px) {
        width: 60%;
    }
`
    export const Box = styled.div`
    width: 720px;
    display: flex;
    margin: 60px 0px 60px 0px;
    justify-content: space-between;
    flex-direction: row;
    @media only screen and (max-width: 576px) {
        flex-direction: column;
        width: 90%;
        align-items: center;
        margin: 20px 0px 20px 0px;
    }
`
    export const ContentBox = styled.div`
    width: 320px;
    height: 160px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: #252836;
    box-shadow: 0px 1px 11px #1F1D2B;
    border-radius: 15px;
    @media only screen and (max-width: 576px) {
        margin: 20px 0px 20px 0px;
    }
`
    export const Footer = styled.div`
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const Icons = styled.div`
    width: 172px;
    margin: 30px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
`
export const ImageBox = styled.img`
    object-fit: cover;
    width: 300px;
    border-radius: 4px;
`
export const Name = styled.div`
    position: absolute;
    bottom: 0px;
    padding: 0px 0px 15px 30px;
    width: 100%;
    background-image: linear-gradient(180deg, rgba(37,40,54, 0.6), rgba(37,40,54, 1));
`