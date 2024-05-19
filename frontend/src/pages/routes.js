import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicial from './home/inicial'
import Login from './login/paginaLogin'
import InicioLeite from './leite/inicio/inicioLeite'
import InicioContas from './contas/inicioContas'


export default function Rotas (){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Inicial />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/leite' element={<InicioLeite />}/>
                    <Route path='/prestacao-de-contas' element={<InicioContas />}/>
                    
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}