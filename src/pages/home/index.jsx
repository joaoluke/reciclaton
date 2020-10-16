import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginAction } from "../../redux/action/login"
import reciclagem from "./images/vector-illustration-recycling-nature-flat_82574-3408.png";
import {
  StyledTextBox,
  StyledLogo,
  StyledSocial,
  StyledList,
  StyleMain,
  StyleImg,
  StyleContainer,
  StyledEmpresa,
  StyleTitle,
  StyleParagraph,
  StyledBox,
  StyleCleitinho,
  StyleSelo,
  StyleCadastro,
  StyledSelo,
  StyledRanking,
} from "./styled";
import cleitinho from "./images/cleitinho.png";
import facebook from "./images/facebook.png";
import linkedin from "./images/linkedin.png";
import instagram from "./images/instagram.png";
import BaseLayout from "../../components/layout";
import Modal from "../../components/modal";
const Home = () => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [visibleCadastro, setVisibleCadastro] = useState(false);
  const authen = useSelector((state) => state.login.authen);
  console.log(authen)

  return (
    <BaseLayout>
      <StyleMain>
        <StyleContainer>
          <StyleImg src={reciclagem} />
          <StyledEmpresa>
            <StyleTitle>PARA SUA EMPRESA:</StyleTitle>
            <StyledTextBox>
              Através de nossa plataforma é possível solicitar a coleta
              informando a quantidade e os tipos de resíduos que estão sendo
              descartados, e um coletor vai até seu estabelecimento realizar a
              coleta do lixo reciclável. A partir da nota de avaliação dada ao
              coletor, conseguimos garantir a qualidade do atendimento
            </StyledTextBox>
            <StyleTitle> {authen === "" && "GOSTOU ?"}  </StyleTitle>
            {authen === "" &&
              <StyleCadastro>
                <Modal visible={visible} setVisible={setVisible}>
                  <StyleTitle style={{ color: "#70D548" }} >
                    Cadastre - se
              </StyleTitle>
                </Modal>
              </StyleCadastro>}


            <StyleTitle onClick={() => {
              history.push("/ranking");
            }}>
              Conheça nosso
              </StyleTitle>
            <StyledRanking>Ranking</StyledRanking>


          </StyledEmpresa>
        </StyleContainer>

        <StyledBox>
          <StyleTitle>IMPORTÂNCIA DA RECICLAGEM:</StyleTitle>
          <StyleTitle>A natureza leva para decompor:</StyleTitle>
          <StyledList>
            <ul>
              <li>2 a 6 semanas um jornal,</li>
              <li>1 a 4 semanas as embalagens de papel,</li>
              <li>3 meses as cascas de frutas,</li>
              <li>3 meses os guardanapos de papel,</li>
              <li>30 a 40 anos o nylon,</li>
              <li>200 a 450 anos os sacos e copos de plástico,</li>
              <li>100 a 500 anos as pilhas,</li>
              <li>100 a 500 anos as latas de alumínio,</li>
              <li>1.000.000 de anos o vidro</li>
            </ul>
          </StyledList>
        </StyledBox>

        <StyleContainer>
          <StyleCleitinho src={cleitinho} />
          <StyleSelo>
            <StyleTitle>Sobre Nosso SELO:</StyleTitle>
            <StyledSelo>
              De acordo com a classificação, sua empresa ganha um selo, atraindo
              um número maior de clientes que cada vez mais estão preocupados
              com o meio ambiente e a sustentabilidade e com as pessoas cada vez
              mais se preocupando com a qualidade de vida, de forma racional e
              sustentável, é importante que as empresas demonstrem que estão
              preocupadas e cuidando do meio ambiente. I
            </StyledSelo>
            <StyledSelo>
              As empresas de reciclagem de lixo possuem uma grande importância
              para o meio ambiente, mas sabemos que o lixo reciclável nem sempre
              chega a usina de reciclagem.
            </StyledSelo>
            <StyledSelo>
              Estamos em um mundo que preza cada vez mais por meios sustentáveis
              e existe a importância de melhorarmos este sistema de coleta de
              lixo e preservar o meio ambiente.
            </StyledSelo>
            <StyledSelo>
              Com o crescente aumento da população mundial e o expressivo
              crescimento industrial há também de se constatar um considerável
              aumento da quantia de resíduos produzidos pela sociedade, sejam
              eles orgânicos ou inorgânicos.
            </StyledSelo>
            <StyledSelo>
              De maneira simples, a reciclagem pode ser entendida como o
              processo de reaproveitamento pelo qual passam objetos usados, a
              fim de que novos produtos possam ser confeccionados a partir
              deles.
            </StyledSelo>
            <StyledSelo>
              Economicamente, a reciclagem é geradora de riquezas, uma vez que
              as empresas se valem desse processo para redução de custos no
              processo produtivo, ao passo em que contribuem para a preservação
              do meio ambiente.
            </StyledSelo>
          </StyleSelo>
        </StyleContainer>

        <StyledBox>
          <StyleTitle> NOSSA MISSÃO:</StyleTitle>
          <StyleParagraph>
            Empregando a tecnologia, proporcionamos solução estratégica e
            econômica para melhorar o meio ambiente, a começar pela diminuição
            da poluição do ar, do solo e das águas, assim como minimizar os
            impactos ambientais, preservar os recursos naturais que são
            limitados e consequentemente preservar a natureza .
          </StyleParagraph>
        </StyledBox>

        <StyledSocial>
          <StyledLogo logo={facebook}></StyledLogo>
          <StyledLogo logo={instagram}></StyledLogo>
          <StyledLogo logo={linkedin}></StyledLogo>
        </StyledSocial>
      </StyleMain>
    </BaseLayout>
  );
};

export default Home;
