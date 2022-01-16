import React from "react";
import {
  Container,
  NameDiv,
  Name,
  About,
  Icons,
  IconButton,
  Aboutme,
} from "../styled/homeStyled";
import {
  AiFillGithub,
  AiOutlineGitlab,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
export const HomeScreen = () => {
  return (
    <Container>
      <NameDiv>
        <Name>Daril</Name>
        <Name>Insan</Name>
        <Name>Kamil</Name>
      </NameDiv>
      <About>
        <Aboutme>
          Hello,I'm Daril Insan Kamil I'm 19 years old live in Jakarta asdads asd asdas asdads fsfas,
          sdfsdfsdf sdf sdfsfdsdkksdf sdfsdfklko{" "}
          <Icons>
            <IconButton href="https://github.com/DarilInsanKamil">
              <AiFillGithub size={32} color="#1B1F23" />
            </IconButton>
            <IconButton href="https://gitlab.com/Darill">
              <AiOutlineGitlab size={32} color="#F96424" />
            </IconButton>
            <IconButton href="https://twitter.com/Mwuehehee">
              <AiOutlineTwitter size={32} color="#00ACED" />
            </IconButton>
            <IconButton>
              <AiOutlineInstagram size={32} color="#E6112D" />
            </IconButton>
          </Icons>
        </Aboutme>
      </About>
    </Container>
  );
};
