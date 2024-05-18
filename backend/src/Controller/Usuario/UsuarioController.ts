import { Request, Response } from "express";
import { UsuarioServices } from "../../Services/Usuario/UsuarioServices";

class UsuarioController {
  async criarUsuario(req: Request, res: Response) {
    const { nome, email, senha } = req.body;

    const criarUsuariosServices = new UsuarioServices();
    const resposta = await criarUsuariosServices.execute({
      nome,
      email,
      senha,
    });
    return res.json(resposta);
  }

  async logarUsuario(req: Request, res: Response) {
    const { email, senha } = req.body;
    const criarUsuariosServices = new UsuarioServices();
    const resposta = await criarUsuariosServices.login({
      email,
      senha,
    });
    return res.json(resposta);
  }

  //LISTAR USUÁRIO UNICO
  async listarUsuario(req: Request, res: Response) {
    const { id } = req.params;
    const usuarioServices = new UsuarioServices();
    const resposta = await usuarioServices.listarUser({
      id,
    });
    return res.json(resposta);
  }
}

export { UsuarioController };
