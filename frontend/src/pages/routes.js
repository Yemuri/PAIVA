import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Inicial from './home/inicial'
import Login from './login/paginaLogin'
import InicioLeite from './leite/inicio/inicioLeite'



export default function Rotas (){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Inicial />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/leite' element={<InicioLeite />}/>
                    
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}