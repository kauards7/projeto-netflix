import React from "react";
import Header from "../header/header";
import './alerta.css';
import Logo from '../../assets/netflix-logo1.png'
import Video from '../../assets/Alerta-vermelho.mp4'


function Alerta () {
    return (
        <>    
            <Header/>
            <div id='banner-alerta'></div>
            <div className="descricao">
               <div className="container-descricao">
                    <h1>Alerta Vermelho</h1>
                    <span className="classificacao"><br/>2021 | 12 | 1h58min | Ação/Comédia <br/></span>
                    <span ><br/>Um alerta vermelho da Interpol é emitido e o agente do FBI John Hartley assume o caso.<br/>Durante sua busca, ele se vê diante de um assalto ousado e é forçado a se aliar ao maior ladrão de arte da história, Nolan Booth, para capturar a ladra de arte mais procurada do mundo atualmente, Sarah Black.</span>
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


export default Alerta;