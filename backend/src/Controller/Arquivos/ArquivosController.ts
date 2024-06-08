import { Request, Response } from "express";
import { ArquivosServices } from "../../Services/Arquivos/ArquivosServices";

class ArquivosController {
  async criacaoEvento(req: Request, res: Response) {
    const { nome, data, descricao, banner } = req.body;
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
      });

      return res.json(resposta);
    }
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
}

export { ArquivosController };
