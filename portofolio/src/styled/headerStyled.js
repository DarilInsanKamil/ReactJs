import styled from 'styled-components';

export const Container = styled.nav`
background: rgba(255, 255, 255, 0.7); // Make sure this color has an opacity of less than 1
backdrop-filter: blur(8px); // This be the blur
    display: flex;
    padding: 20px 100px 20px 100px;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    position: fixed;
    @media only screen and (max-width: 768px){
        padding: 20px 30px 20px 30px;
    }
    font-family: 'Playfair Display', serif;
`
export const Logo = styled.img`
    width: 60px;
    height: 40px;
    @media only screen and (max-width: 768px){
        width: 40px;
        height: 30px;
    }
`
export const NavUl = styled.ul`
    width: 20%;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 768px){
        display: none;
    }
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    `
    export const NavLi = styled.li`
    list-style-type: none;
    `
    export const NavLiMobile = styled.li`
    list-style-type: none;
    font-size: 32px;
    margin-top: 40px;
    `
    export const Icons = styled.div`
    display: none;
    @media only screen and (max-width: 768px){
        display: inline;
    }
    `
    export const NavMobile = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    ` 