import {Request, Response} from 'express'
import { UsuarioServices } from '../../Services/Usuario/UsuarioServices'

class UsuarioController{
    async criarUsuario(req: Request, res: Response){
        const {nome, email, senha} = req.body
        
        const criarUsuariosServices = new UsuarioServices()
        const resposta = await criarUsuariosServices.execute({
            nome, email, senha
        })
        return resposta
    }

}



export {UsuarioController}