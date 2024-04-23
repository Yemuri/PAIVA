import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicial from './home/inicial'
import Login from './login/paginaLogin'
import InicioLeite from './leite/inicio/inicioLeite'
import Navegacao from '../component/navegacao'


export default function Rotas (){
    return (
        <div>
            <BrowserRouter>
            <Navegacao/>
                <Routes>
                    <Route path='/' element={<Inicial />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/leite' element={<InicioLeite />}/>
                    
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}