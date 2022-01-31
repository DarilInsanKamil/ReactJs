import React, { useState } from "react";
import {
  Container,
  Colors,
  SubContainer,
  Images,
  Lines,
  LinesH,
  Head,
  QuickAbout,
  Text,
  ProjectandBlog,
  Project,
  Box,
  ContentBox,
  Footer,
  Icons,
  ImageBox,
  Name,
} from "../Styled/Homestyled";
import path from "../path.jpg";
import {
  AiFillGithub,
  AiOutlineGitlab,
  AiOutlineInstagram,
} from "react-icons/ai";
import myweb from "../myweb2.png";
import suitgame from "../suitgame.png";
export const Home = () => {
  const [click, setClick] = useState(true);
  return (
    <Container>
      <SubContainer>
        <Head>
          <Lines></Lines>
          <Images src={path} />
        </Head>
        <QuickAbout>
          <Text align="center" color={Colors.text}>
            Hallo, saya Daril insan kamil, seorang pelajar yang sudah lulus dan
            sekarang menjadi pengangguran. Tidak hanya sebagai pengangguran yang
            menghabiskan makanan dirumah saja saya juga suka membuat sebuah
            Website, Mobile App.
          </Text>
        </QuickAbout>
      </SubContainer>
      <ProjectandBlog>
        <LinesH></LinesH>
        <Project>
          <Text
            onClick={() => setClick(true)}
            color={click ? "#fff" : "#92949B"}
            weight={click ? "700" : "normal"}
          >
            Project
          </Text>
          <Text
            onClick={() => setClick(false)}
            color={click ? "#92949B" : "#fff"}
            weight={click ? "normal" : "700"}
          >
            Blog
          </Text>
        </Project>

        {/* BOX CONTENT */}
        {click ? (
          <Box>
            <a href="https://pensive-jennings-7c7879.netlify.app">
              <ContentBox>
                <ImageBox src={myweb} />
                <Name>
                  <Text weight="600" size="14px">
                    Movie and Games
                  </Text>
                  <Text color={Colors.text} size="12px">
                    ReactJs, Styled component
                  </Text>
                </Name>
              </ContentBox>
            </a>
            <a href="https://gifted-kirch-e33f66.netlify.app">
              <ContentBox>
                <ImageBox src={suitgame} />
                <Name>
                  <Text weight="600" size="14px">
                    Suit Game
                  </Text>
                  <Text color={Colors.text} size="12px">
                    ReactJs, Styled component
                  </Text>
                </Name>
              </ContentBox>
            </a>
          </Box>
        ) : (
          <Box>
            <ContentBox>
              <Text>#Hello world</Text>
            </ContentBox>
          </Box>
        )}

        {/* FOOTER */}

        <Footer>
          <Text color={Colors.text}>Follow me:</Text>
          <Icons>
            <a href="https://github.com/DarilInsanKamil">
              <AiFillGithub size={26} color={Colors.text} />
            </a>
            <a href="https://gitlab.com/Darill">
              <AiOutlineInstagram size={26} color={Colors.text} />
            </a>
            <a href="https://www.instagram.com/darilkamil/">
              <AiOutlineGitlab size={26} color={Colors.text} />
            </a>
          </Icons>
        </Footer>
      </ProjectandBlog>
    </Container>
  );
};
