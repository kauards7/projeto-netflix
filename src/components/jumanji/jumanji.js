import React from "react";
import Header from "../header/header";
import './jumanji.css';
import Logo from '../../assets/netflix-logo1.png'
import Video from '../../assets/Jumanji.mp4'


function Jumanji () {
    return (
        <>    
            <Header/>
            <div id='banner-jumanji'></div>
            <div className="descricao">
               <div className="container-descricao">
                    <h1>Jumanji</h1>
                    <span className="classificacao"><br/>2019 | 12 | 2h3min | Aventura/Comédia <br/></span>
                    <span ><br/>Spencer volta ao mundo fantástico de Jumanji. Os amigos Martha, Fridge e Bethany entram no jogo e tentam trazê-lo para casa.<br/>A turma descobre ainda mais obstáculos e perigos a serem superados.</span>
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


export default Jumanji;