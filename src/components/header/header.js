import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/netflix-gif.gif'

function Header () {
    return(
        <>
        <header>
            <Link to='/'>
                <img id="logo" src={Logo} />
            </Link>
            <div className='container-login'>
                <Link className='link-registro' style={{textDecoration:'none'}} >
                    <button className='registro'>Cadastre-se</button>
                </Link>
                <Link className='link-entrar' style={{textDecoration:'none'}} to='/Login'>
                    <button className='entrar'>Entrar</button>
                </Link>
            </div>
            
        </header>
        </>
    )
}



export default Header;