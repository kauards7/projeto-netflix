import React from "react";
import Header from "../header/header";
import './bay.css';
import Logo from '../../assets/netflix-logo1.png'
import Video from '../../assets/Baywatch.mp4'


function Baywatch () {
    return (
        <>    
            <Header/>
            <div id='banner-bay'></div>
            <div className="descricao">
               <div className="container-descricao">
                    <h1>Baywatch</h1>
                    <span className="classificacao"><br/>2017 | 14 | 2h1min | Comédia/Ação <br/></span>
                    <span ><br/>O ex-atleta olímpico Matt Brody quer se juntar a uma equipe de salva-vidas de elite liderada por Mitch Buchannon.<br/> Quando as drogas e o suspeito dono de um resort ameaçam a baía, Mitch e Matt precisam colocar suas diferenças de lado e entrar em ação.</span>
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


export default Baywatch;