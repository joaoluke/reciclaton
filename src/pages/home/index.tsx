import React from 'react';
import styled from 'styled-components';


import reciclagem from './images/vector-illustration-recycling-nature-flat_82574-3408.png'


const Home = () => {

  return (
    <StyledBackground>
      <StyleMain>

        <StyleTitle>TECNOLOGIA - COLETA VIA SITE</StyleTitle>

        <StyleImg src={reciclagem} />

        <StyleParagraph> Em um mundo que preza cada vez mais por sustentabilidade, fornecemos um serviço que garante que o lixo reciclável ganhe um destino correto.</StyleParagraph>

        <p>Através da nossa tecnologia conectamos as empresas que geram resíduos às empresas coletoras.</p>
        <StyledEmpresa>
          <StyleTitle>PARA SUA EMPRESA:</StyleTitle>
          <p>Através de nossa plataforma é possível solicitar a coleta informando a quantidade e os tipos de resíduos que estão sendo descartados, e um coletor vai  até seu estabelecimento realizar a coleta do lixo reciclável. A partir da nota de avaliação dada ao coletor, conseguimos garantir a qualidade do atendimento</p>
        </StyledEmpresa>

        <StyleTitle>SELO:</StyleTitle>
        <p>De acordo com a classificação, sua empresa ganha um selo, atraindo um número maior de clientes que cada vez mais estão preocupados com o meio ambiente e a sustentabilidade e com as pessoas cada vez mais se preocupando com a qualidade de vida, de forma racional e sustentável, é importante que as empresas demonstrem que estão preocupadas e cuidando do meio ambiente. I</p>

        <StyleTitle>IMPORTÂNCIA DA RECICLAGEM:</StyleTitle>
        <StyleTitle>A natureza leva para decompor:</StyleTitle>
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

        <p>As empresas de reciclagem de lixo possuem uma grande importância para o meio ambiente, mas sabemos que o lixo reciclável nem sempre chega a usina de reciclagem.</p>
        <p>Estamos em um mundo que preza cada vez mais por meios sustentáveis e existe a importância de melhorarmos este sistema de coleta de lixo e preservar o meio ambiente.</p>
        <p>Com o crescente aumento da população mundial e o expressivo crescimento industrial há também de se constatar um considerável aumento da quantia de resíduos produzidos pela sociedade, sejam eles orgânicos ou inorgânicos.</p>
        <p>De maneira simples, a reciclagem pode ser entendida como o processo de reaproveitamento pelo qual passam objetos usados, a fim de que novos produtos possam ser confeccionados a partir deles.</p>
        <p>Economicamente, a reciclagem é geradora de riquezas, uma vez que as empresas se valem desse processo para redução de custos no processo produtivo, ao passo em que contribuem para a preservação do meio ambiente.</p>

        <StyleTitle> NOSSA MISSÃO:</StyleTitle>
        <p>Empregando a tecnologia, proporcionamos solução estratégica e econômica para melhorar o meio ambiente, a começar pela diminuição da poluição do ar, do solo e das águas, assim como minimizar os impactos ambientais, preservar os recursos naturais que são limitados e consequentemente preservar a natureza .</p>
      </StyleMain>
    </StyledBackground>
  )
}

export default Home;

const StyledBackground = styled.div`
  background-color: #17271A;
  margin-top: 5px;
  margin-right: 0px;
  margin-left: 0px;
`;

const StyleMain = styled.div`
  background-color: #FFFFFF;
  margin-top: 5px;
  margin-right: 100px;
  margin-left: 100px;
`;



const StyleImg = styled.img`
 float: left;
 margin-right: 30px;
  width: 250px;
`;



const StyleTitle = styled.h3`
  text-align: center;
`;

const StyleParagraph = styled.p`
  margin-left: 200px;
`

const StyledEmpresa = styled.div` 
  height: 200px;
  width: 200px;
` 