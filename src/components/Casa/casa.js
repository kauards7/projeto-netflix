import React from "react";
import Header from "../header/header";
import './casa.css';
import Logo from '../../assets/netflix-logo1.png'
import Video from '../../assets/invasao.mp4'


function Casa () {
    return (
        <>
            <Header/>
            <div id='banner-casa'></div>
            <div className="descricao">
               <div className="container-descricao">
                    <h1>Invasão a Casa Branca</h1>
                    <span className="classificacao"><br/>2013 | 16 | 2h | Ação <br/></span>
                    <span ><br/>O Serviço Secreto dos Estados Unidos conta com a ajuda do ex-segurança particular e amigo pessoal do presidente<br/> para resgatar o chefe de Estado e sua família de terroristas coreanos,que os fizeram reféns e assumiram o controle da Casa Branca.</span>
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


export default Casa;