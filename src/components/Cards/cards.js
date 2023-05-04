import React from "react";
import './cards.css';
import { Link } from 'react-router-dom';

function Cards () {
    return(
        <>
             <div className="container-catalogo">
                <div className="catalogo">Catálogo de filmes:</div>
            </div>
             <div className="actor-cards-container">
                <div className="cards-content">
                    <Link className="link-junior" to='/BadBoys'>
                        <div className="cards banner1"></div>
                    </Link>
                    <Link className="link-junior" to='/noe'>
                        <div className="cards banner2"></div>
                    </Link>
                    <Link className="link-junior" to='/BayWatch' >
                        <div className="cards banner3"></div>
                    </Link>
                    <Link className="link-junior" to='/Jumanji' >
                        <div className="cards banner4"></div>
                    </Link>
                    <Link className="link-junior" to='/AlertaVermelho' >
                        <div className="cards banner5"></div>
                    </Link>
                    <Link className="link-junior" to='/NoOlhoDoFuracão' >
                        <div className="cards banner6"></div>
                    </Link>
                    <Link className="link-junior" to='/EmRitimoDeFuga'>
                        <div className="cards banner7"></div>
                    </Link>
                    <Link className="link-junior" to='/InvasãoaCasaBranca'>
                        <div className="cards banner8"></div>
                    </Link>
                </div>
             </div>
    
        </>       
    )
}
export default Cards;