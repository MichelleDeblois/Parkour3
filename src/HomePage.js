import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Carousel from "./Carousel";

const HomePage = () => {
  return (
    <>
      {/* LE HEADER  */}
      <Header>
        <LogoHorizontal src="logo-horizontal.png"></LogoHorizontal>
        <Link to="/test-page">
          <ButtonHeader> FAIS LE TEST MAINTENANT</ButtonHeader>
        </Link>
      </Header>

      {/* LE PREMIER BLOC  */}
      <FirstBlock>
        <SubContainer>
          <p>UNE CARRIERE EN CONSTRUCTION T'INTÈRESSE ?</p>
          <img src="logo-vertical.png" />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adispiscing elit. Nunc
            vulputate libero et velit interdum,ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquet perconubia nostra, per
            inceptos himenaeos.
          </Text>
          <ButtonFirstBlock>FAIS LE TEST MAINTENANT</ButtonFirstBlock>
        </SubContainer>
        <BrasMecano src="bras-mécano.png"></BrasMecano>
      </FirstBlock>

      {/* LE DEUXIÈME BLOC AVEC LES CAROUSEL */}
      <SecondBlock>
        <Personnage src="personnage.png" />
        <Carousel></Carousel>
      </SecondBlock>

      {/* LE TROISIÈME BLOC */}
      <ThirdBlock>
        <SubContainer>
          <Title>DES OPPORTUNIÉS </Title>
          <Title>STIMULANTES</Title>
          <Li>
            Salaire annuel moyen de <Bold>65 000</Bold> ou taux horraire jusqu'à
            plus de 45$ de l'heure
          </Li>
          <Li>
            <Bold> 4 semaines</Bold> de vacances par année
          </Li>
          <Li>
            Plusieurs mesures d'inclusion pour diversifier la main-d'oeuvre
          </Li>
          <Li>
            <Bold>13 000 travailleurs</Bold> de plus recherchés par année
          </Li>
          <ButtonThirdBlock>PASSE À L'ACTION</ButtonThirdBlock>
        </SubContainer>
      </ThirdBlock>
    </>
  );
};
export default HomePage;

// STYLED COMPONENT POUR LE HEADER
const Header = styled.div`
  background-color: #436dad;
  display: flex;
  justify-content: space-between;
  padding: 15px 35px 5px 35px;
  border-bottom: solid 1px #d3d3d3;
`;

const LogoHorizontal = styled.img`
  height: 30px;
`;
const ButtonHeader = styled.button`
  color: #edb046;
  background: none;
  border: solid 4px #edb046;
  border-radius: 29px;
  padding: 11px 25px 11px 25px;
  cursor: pointer;
  &:hover {
    background-color: #edb046;
    color: white;
  }
`;

// STYLED COMPONENT POUR LE PREMIER BLOC
const FirstBlock = styled.div`
  background-color: #436dad;
  color: white;
  height: 25%;
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  width: 50%;
`;

const ButtonFirstBlock = styled.button`
  color: white;
  background-color: #edb046;
  border: solid 4px #edb046;
  border-radius: 29px;
  padding: 18px 30px 18px 30px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #edb046;
  }
`;
const SubContainer = styled.div`
  display: block;
  width: 100%;
  padding: 25px;
`;

const BrasMecano = styled.img`
  height: 25%;
  width: 500px;
`;

// STYLED COMPONENTS DEUXIÈME BLOC
const SecondBlock = styled.div`
  color: #436dad;
  height: 25%;
`;

// IMAGE DU PERSONNAGE QUI OVERLAY SUR LE DEUXIÈME ET TROISIÈME BLOC
const Personnage = styled.img`
  height: 800px;
  width: 800px;
  z-index: 1;
  position: absolute;
  padding-left: 50%;
  padding-top: 275px;
`;

// STYLED COMPONENTS TROISIÈME BLOC
const ThirdBlock = styled.div`
  color: #436dad;
  height: 25%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Title = styled.span`
  font-size: 50px;
  display: block;
  font-weight: bold;
`;

const Li = styled.li`
  padding: 15px 0px 15px 0px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const ButtonThirdBlock = styled.button`
  color: white;
  background-color: #436dad;
  border: solid 4px #436dad;
  border-radius: 29px;
  padding: 18px 30px 18px 30px;
  margin-top: 20px;
  position: absolute;
  z-index: 4;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #436dad;
  }
`;
