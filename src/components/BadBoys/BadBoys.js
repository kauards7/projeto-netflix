import React from "react";
import Header from "../header/header";
import './BadBoys.css';
import Logo from '../../assets/netflix-logo1.png'
import Video from '../../assets/video.mp4'


function BadBoys () {
    return (
        <>    
            <Header/>
            <div id='banner-badboys'></div>
            <div className="descricao">
               <div className="container-descricao">
                    <h1>Bad Boys Para Sempre</h1>
                    <span className="classificacao"><br/>2020 | 16 | 2h4min | ação <br/></span>
                    <span ><br/>Os policiais Mike Lowery e Marcus Burnett se juntam para derrubar o líder de um cartel de drogas em Miami.<br/>A recém-criada equipe de elite do departamento de polícia de Miami, ao lado de Mike e Marcus, enfrenta o implacável Armando Armas.</span>
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


export default BadBoys;