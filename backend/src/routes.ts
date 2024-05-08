import {Router} from 'express'
import multer from 'multer'
import {UsuarioController} from "./Controller/Usuario/UsuarioController"

import uploadConfig from './config/multer'


const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))

//USUARIO
router.post('/criar-usuario', new  UsuarioController().criarUsuario)

export {router}