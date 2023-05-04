import React from "react";
import Header from "../header/header";
import './fuga.css';
import Logo from '../../assets/netflix-logo1.png'
import Video from '../../assets/fuga.mp4'


function Fuga () {
    return (
        <>
            <Header/>
            <div id='banner-fuga'></div>
            <div className="descricao">
               <div className="container-descricao">
                    <h1>Em Ritimo De Fuga</h1>
                    <span className="classificacao"><br/>2017 | 14 | 1h55min | Ação <br/></span>
                    <span ><br/>O talentoso motorista de fuga Baby confia nas batidas de sua própria trilha sonora para ser o melhor que existe. A música silencia um zumbido que o perturba desde um acidente na infância. Após conhecer a mulher dos seus sonhos, ele reconhece uma oportunidade de se livrar do estilo de vida questionável e recomeçar do zero.<br/>Obrigado a trabalhar para um chefão do crime, Baby lida com a música ao mesmo tempo em que um golpe fadado ao fracasso ameaça sua vida, seu amor e sua liberdade.</span>
                    <h3>Trailer Oficial:</h3>
                </div>
                <video controls className="trailer">
                    <source src={Video}/>
                </video>
                <button className="assista">Assista</button>
            </div>
            <footer className="footer-badboys"> 
                <img id='logo2'src={Logo} alt="" />
                <span className='junior2'>Desenvolvido por:Vitor Bougleux e Kauã Rodrigues.</span>
            </footer>
        </>
    )
}


export default Fuga;