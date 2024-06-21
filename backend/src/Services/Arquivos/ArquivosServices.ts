import prismaClient from "../../prisma";

interface CriarEvento {
  nome: string;
  data: string;
  descricao: string;
  banner: string;
  categoriaId: string;
}

interface EventoUnico {
  id: string;
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

  async listarTodosEventos() {
    const eventos = await prismaClient.evento.findMany({
      orderBy: {
        create_at: "desc",
      },
    });

    return eventos;
  }

  async listarCategoriaEventos() {
    const eventos = await prismaClient.categoria_Eventos.findMany({
      orderBy: {
        create_at: "desc",
      },
      include: {
        Evento: true,
      },
    });

    return eventos;
  }

  async listarEventoUnico({ id }: EventoUnico) {
    const resposta = await prismaClient.evento.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        nome: true,
        data: true,
        descricao: true,
        banner: true,
      },
    });
    return resposta;
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
