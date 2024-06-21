import { Request, Response } from "express";
import { ArquivosServices } from "../../Services/Arquivos/ArquivosServices";

class ArquivosController {
  async criarCategoria(req: Request, res: Response) {
    const { nome_categoria } = req.body;

    const arquivosServices = new ArquivosServices();
    const resposta = await arquivosServices.criaCategoria({
      nome_categoria,
    });
    return res.json(resposta);
  }

  async criacaoEvento(req: Request, res: Response) {
    const { nome, data, descricao, banner, categoriaId } = req.body;
    if (!req.file) {
      throw new Error("Imagem com problema");
    } else {
      const { filename: banner } = req.file;

      const arquivosServices = new ArquivosServices();
      const resposta = await arquivosServices.criarEvento({
        nome,
        data,
        descricao,
        banner,
        categoriaId,
      });

      return res.json(resposta);
    }
  }

  async listarTodosEventos(req: Request, res: Response) {
    const arquivosServices = new ArquivosServices();
    const resposta = await arquivosServices.listarTodosEventos();
    return res.json(resposta);
  }

  async listarCategoriaEventos(req: Request, res: Response) {
    const arquivosServices = new ArquivosServices();
    const resposta = await arquivosServices.listarCategoriaEventos();
    return res.json(resposta);
  }

  async listaEventoUnico(req: Request, res: Response) {
    const { id } = req.params;
    const arquivosServices = new ArquivosServices();
    const resposta = await arquivosServices.listarEventoUnico({
      id,
    });
    return res.json(resposta);
  }

  async criacaoBalancete(req: Request, res: Response) {
    const { nome, ano, banner } = req.body;
    if (!req.file) {
      throw new Error("Imagem com problema");
    } else {
      const { filename: banner } = req.file;

      const arquivosServices = new ArquivosServices();
      const resposta = await arquivosServices.criarBalancete({
        nome,
        ano,
        banner,
      });
      console.log(resposta);
      return res.json(resposta);
    }
  }

  async listarBalancete(req: Request, res: Response) {
    const arquivosServices = new ArquivosServices()
    const resposta = await arquivosServices.listarBalancete()
    return res.json(resposta)
  }
}

export { ArquivosController };
