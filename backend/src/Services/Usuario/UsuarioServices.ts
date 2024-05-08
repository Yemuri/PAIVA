import prismaClient from '../../prisma'
import {hash} from 'bcryptjs'

interface CriarUsuario{
    nome: string
    email: string
    senha: string 
}

class UsuarioServices{
    async execute({nome, email, senha} : CriarUsuario){
        if (!nome || !email || !senha) {
            throw new Error("Existem campos em branco");
        }
        const emailExiste = await prismaClient.usuario.findFirst({
            where:{
                email: email
            }
        })
        if (emailExiste) {
            throw new Error("E-mail já cadastrado");
        }

        const senhaCrypt = await hash(senha, 8)
        const resposta = await prismaClient.usuario.create({
            data:{
                nome,
                email,
                senha: senhaCrypt
            },
            select:{
                id: true,
                nome: true,
            
            }
        })
        console.log(resposta)
        return ({resposta})
        
    }
}

export {UsuarioServices}