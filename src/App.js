import React from 'react';
import './App.css';
import Home from './pages/home';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import BadBoys from './components/BadBoys/BadBoys';
import Noe from './components/noe/noe';
import Baywatch from './components/Baywatch/bay';
import Jumanji from './components/jumanji/jumanji';
import Alerta from './components/Alerta-vermelho/alerta';
import Furacao from './components/Furacao/furacao';
import Fuga from './components/fuga/fuga';
import Casa from './components/Casa/casa';
import FuracaoFilme from './components/furacao-filme/furacao2';
import Login from './components/login/login';
import Cadastro from './components/cadastro/cadastro';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/BadBoys' element={<BadBoys/>}/>
          <Route path='/noe' element={<Noe/>}/>
          <Route path='/BayWatch' element={<Baywatch/>}/>
          <Route path='/Jumanji' element={<Jumanji/>}/>
          <Route path='/AlertaVermelho' element={<Alerta/>}/>
          <Route path='/NoOlhoDoFuracão' element={<Furacao/>}/>
          <Route path='/EmRitimoDeFuga' element={<Fuga/>}/>
          <Route path='/InvasãoaCasaBranca' element={<Casa/>}/>
          <Route path='/FuracaoFilme' element={<FuracaoFilme/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/teste' element={<Cadastro/>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
