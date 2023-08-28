import Header from "../../components/Header/Header";
import { MainContainer } from "../../constants/stylePages";
import Footer from "../../components/Footer/Footer";
import { SectionAbout } from "../../constants/stylePages";

function About() {

    return (
      <> 
        <Header/>

<MainContainer>
<SectionAbout >

  <div className="boxTextIntro">
    <h1>O que é a Pokedex?</h1>
    <p>A Pokédex é um dispositivo fictício dentro do mundo da franquia Pokémon que atua como uma enciclopédia eletrônica para todas as espécies de Pokémon. Ela é uma ferramenta essencial para os treinadores Pokémon, ajudando-os a coletar e armazenar informações sobre as várias criaturas que eles encontram em suas jornadas.</p>
    <p></p>
    <p>A Pokédex não é apenas um elemento importante nos jogos de vídeo, mas também desempenha um papel significativo nos desenhos animados, filmes e outras mídias relacionadas a Pokémon. É uma ferramenta central que ajuda os treinadores a aprenderem mais sobre as características e os atributos únicos de cada espécie de Pokémon.</p>
    <p></p>
    
  </div>

</SectionAbout>  
</MainContainer>
<Footer/>
</>
);
}

export default About