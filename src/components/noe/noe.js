import React from "react";
import Header from "../header/header";
import './noe.css';
import Logo from '../../assets/netflix-logo1.png'
import Video from '../../assets/noe.mp4'


function Noe () {
    return (
        <>    
            <Header/>
            <div id='banner-noe'></div>
            <div className="descricao">
               <div className="container-descricao">
                    <h1>Noé</h1>
                    <span className="classificacao"><br/>2014 | 14 | 2h18min | Aventura/Fantasia <br/></span>
                    <span ><br/>Noé vive com a esposa Naameh e os filhos Sem, Cam e Jafé em um mundo devastado pelo pecado, onde os homens perseguem e matam uns aos outros.<br/>Um dia, Noé recebe uma missão divina: construir uma imensa arca para abrigar os animais durante um dilúvio.</span>
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


export default Noe;