import React from "react";
import Filme from '../../assets/fuga.mp4'
import './furacao2.css'

function FuracaoFilme () {
    return(
        <div className="filme-container">
            <video controls className="trailer2">
                <source  src={Filme}/>
            </video>
        </div>
    )
}

export default FuracaoFilme;