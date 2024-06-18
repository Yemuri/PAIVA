import { Router } from "express";
import multer from "multer";
import { UsuarioController } from "./Controller/Usuario/UsuarioController";

import uploadConfig from "./config/multer";
import { ArquivosController } from "./Controller/Arquivos/ArquivosController";
import { isAuth } from "./middleware/isAuth";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

//UPLOAD
router.post("/criar-categoria", new ArquivosController().criarCategoria);

router.post(
  "/criar-evento",
  upload.single("file"),
  isAuth,
  new ArquivosController().criacaoEvento
);

router.post(
  "/criar-balancete",
  isAuth,
  upload.single("file"),
  new ArquivosController().criacaoBalancete
);
//USUARIO
router.post("/criar-usuario", new UsuarioController().criarUsuario);
router.post("/logar-usuario", new UsuarioController().logarUsuario);
router.get(
  "/listar-usuario/:id",
  isAuth,
  new UsuarioController().listarUsuario
);

export { router };
