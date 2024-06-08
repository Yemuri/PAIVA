import prismaClient from "../../prisma";

interface CriarEvento {
  nome: string;
  data: string;
  descricao: string;
  banner: string;
}

interface CriarBalancete {
  nome: string;
  ano: string;
  banner: string;
}

class ArquivosServices {
  async criarEvento({ nome, data, descricao, banner }: CriarEvento) {
    if (!nome || !data || !banner) {
      throw new Error("Existem campos em branco");
    }
    await prismaClient.evento.create({
      data: {
        nome: nome,
        data: data,
        descricao: descricao,
        banner: banner,
      },
    });

    return { dados: "Evento criado com sucesso!" };
  }

  async criarBalancete({ nome, ano, banner }: CriarBalancete) {
    if (!nome || !ano || !banner) {
      throw new Error("Existem campos em branco");
    }
    await prismaClient.prestacaoContas.create({
      data: {
        nome: nome,
        ano: ano,
        banner: banner,
      },
    });
    return { dados: "Balancete enviado com sucesso!" };
  }
}

export { ArquivosServices };
