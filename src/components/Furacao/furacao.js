import React from "react";
import Header from "../header/header";
import './furacao.css';
import Logo from '../../assets/netflix-logo1.png'
import Video from '../../assets/furacao.mp4'
import { Link } from "react-router-dom";


function Furacao () {
    return (
        <>
            <Header/>
            <div id='banner-furacao'></div>
            <div className="descricao">
               <div className="container-descricao">
                    <h1>No Olho Do Furacao</h1>
                    <span className="classificacao"><br/>2018 | 14 | 1h40min | Ação <br/></span>
                    <span ><br/>Ladrões planejam roubar 600 milhões de dólares do Tesouro Americano. No mesmo dia do assalto, um furacão de categoria máxima está previsto chegar à cidade.<br/> A população deixa o local, restando apenas um meteorologista, um agente do Tesouro Americano e um ex- fuzileiro naval.<br/>Juntos, eles precisam não apenas sobreviver a maior das tempestades, mas também impedir o roubo do século.</span>
                    <h3>Trailer Oficial:</h3>
                </div>
                <video controls className="trailer">
                    <source src={Video}/>
                </video>
                <Link to="/FuracaoFilme">
                    <button className="assista">Assista</button>
                </Link>
            </div>
            <footer className="footer-badboys"> 
                <img id='logo2'src={Logo} alt="" />
                <span className='junior2'>Desenvolvido por:Vitor Bougleux e Kauã Rodrigues.</span>
            </footer>
        </>
    )
}


export default Furacao;