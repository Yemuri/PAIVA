import prismaClient from "../../prisma";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface CriarUsuario {
  nome: string;
  email: string;
  senha: string;
}
interface LoginUsuario {
  email: string;
  senha: string;
}

interface ListarUsuario {
  id: string;
}

class UsuarioServices {
  async execute({ nome, email, senha }: CriarUsuario) {
    if (!nome || !email || !senha) {
      throw new Error("Existem campos em branco");
    }
    const emailExiste = await prismaClient.usuario.findFirst({
      where: {
        email: email,
      },
    });
    if (emailExiste) {
      throw new Error("E-mail já cadastrado");
    }

    const senhaCrypt = await hash(senha, 8);
    const resposta = await prismaClient.usuario.create({
      data: {
        nome,
        email,
        senha: senhaCrypt,
      },
      select: {
        id: true,
        nome: true,
      },
    });
    console.log(resposta);
    return { resposta };
  }

  async login({ email, senha }: LoginUsuario) {
    const usuario = await prismaClient.usuario.findFirst({
      where: {
        email: email,
      },
    });
    if (!usuario) {
      throw new Error("Usuário / Senha estão incorretos");
    }
    const autenticado = await compare(senha, usuario.senha);
    if (!autenticado) {
      throw new Error("Usuario / Senha estão errados");
    }
    const token = sign(
      {
        id: usuario.id,
        email: usuario.email,
      },
      process.env.JWT_SECRET,
      {
        subject: usuario.id,
        expiresIn: 1000000,
      }
    );
    return {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      token: token,
    };
  }

  //LISTAR USUÁRIO UNICO
  async listarUser({ id }: ListarUsuario) {
    const resposta = await prismaClient.usuario.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        nome: true,
        email: true,
      },
    });
    return resposta;
  }
}

export { UsuarioServices };
