import prismaClient from "../../prisma";

interface CriarEvento {
  nome: string;
  data: string;
  descricao: string;
  banner: string;
  categoriaId: string;
}

interface CriarBalancete {
  nome: string;
  ano: string;
  banner: string;
}

interface CriarCategoria {
  nome_categoria: string;
}

class ArquivosServices {
  async criarEvento({
    nome,
    data,
    descricao,
    banner,
    categoriaId,
  }: CriarEvento) {
    if (!nome || !data || !banner) {
      throw new Error("Existem campos em branco");
    }

    console.log(nome, data, descricao, banner);

    await prismaClient.evento.create({
      data: {
        nome: nome,
        data: data,
        descricao: descricao,
        banner: banner,
        categoriaId: categoriaId,
      },
    });

    return { dados: "Evento criado com sucesso!" };
  }

  async criaCategoria({ nome_categoria }: CriarCategoria) {
    if (!nome_categoria) {
      throw new Error("Não são permitidos campos em branco!");
    }
    const nomeId = await prismaClient.categoria_Eventos.findFirst({
      where: {
        nome_categoria: nome_categoria,
      },
    });
    if (nomeId) {
      throw new Error("Categoria já cadastrada");
    }
    await prismaClient.categoria_Eventos.create({
      data: {
        nome_categoria: nome_categoria,
      },
    });
    return { dados: "Categoria criada com sucesso!" };
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
