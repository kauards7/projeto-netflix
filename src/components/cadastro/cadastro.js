import React from "react";
import './cadastro.css'


function Cadastro(){
    return(
        <div className="cadastro">
        <form>
            <label for="name">Nome</label>
            <input  id="name" type="text" placeholder="Digite seu nome"/>

            <label for="number">Telefone</label>
            <input type="number" id="number" placeholder="Digite seu telefone"/>

            <label for="cpf">Cpf</label>
            <input type="number" id="cpf" placeholder="Digite seu cpf"/>

            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Digite seu email"/>
        </form>
        
        </div>
    )
}

export default Cadastro;