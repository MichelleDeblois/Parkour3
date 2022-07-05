import React, { useState } from "react";
import styled from "styled-components";
import { carouselContent } from "./CarouselData";
function Carousel() {
  const [currentBox, setCurrentBox] = useState(0);
  return (
    <>
      <Wrapper>
        <CarouselContainer>
          <CarouselInner>
            <Title>LES</Title>
            <Title>{carouselContent[currentBox].title}</Title>
            <Description>{carouselContent[currentBox].description}</Description>
            <Job>{carouselContent[currentBox].job}</Job>
            <Button>{carouselContent[currentBox].button}</Button>
          </CarouselInner>
          <Img src={carouselContent[currentBox].img} />
        </CarouselContainer>
        {/* LA PARTIE FOOTER PERMETS DE CHANGER DE BLOC A CHAQUE onClick */}
        <Footer>
          <Backward
            onClick={() => {
              currentBox > 0 && setCurrentBox(currentBox - 1);
            }}
          >
            Précédent
          </Backward>
          <Foward
            onClick={() => {
              currentBox < carouselContent.length - 1 &&
                setCurrentBox(currentBox + 1);
            }}
          >
            Prochain
          </Foward>
        </Footer>
      </Wrapper>
    </>
  );
}
// STYLED COMPONENT DU BLOC (DEUXIÈME BLOCK SUR LA HOMEPAGE)
const Wrapper = styled.div`
  display: block;
  height: 100%;
`;

const Title = styled.span`
  font-size: 70px;
  display: block;
  font-weight: bold;
`;

const Button = styled.button`
  position: absolute;
  z-index: 4;
  color: #436dad;
  background-color: white;
  border: solid 4px #436dad;
  border-radius: 29px;
  padding: 18px 30px 18px 30px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: #436dad;
    color: white;
  }
`;

const Description = styled.p`
  width: 55%;
`;

const Job = styled.p`
  font-weight: bold;
  display: flex;
  width: 70%;
  border-left: solid 18px #edb046;
  padding-left: 10px;
`;
const CarouselContainer = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
`;
const CarouselInner = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 25px;
  color: #436dad;
`;
const Img = styled.img`
  height: 500px;
  width: 500px;
`;

//STYLED COMPONENTS DU FOOTER
const Footer = styled.div`
  display: flex;
  justify-content: center;
  height: 20px;
  width: 100%;
  position: absolute;
  z-index: 3;
`;
const Foward = styled.div`
  height: 100%;
  margin-left: 10px;
  color: #436dad;
  cursor: pointer;
`;
const Backward = styled.div`
  height: 100%;
  margin-right: 10px;
  color: #436dad;
  cursor: pointer;
`;

export default Carousel;
