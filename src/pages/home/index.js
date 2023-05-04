import React from 'react';
import Header from '../../components/header/header';
import './styles.css';
import Cards from '../../components/Cards/cards';
import Logo from '../../assets/netflix-logo1.png';

function Home(){


    return(
        <>
            <Header/>
            <Cards/>
            <footer>
                <img id='logo2'src={Logo} />
                <span className='junior2'>Desenvolvido por:Vitor Bougleux e Kauã Rodrigues.</span>
            </footer>
        </>
    )
}
export default Home;