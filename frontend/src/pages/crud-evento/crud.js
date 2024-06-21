import { IoIosAddCircle } from "react-icons/io";
import { FaMapPin, FaCalendarAlt } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6";

import "./crud.css";

export default function CrudEvento() {
  return (
    <div className="container">
      <div className="header">
        <div class="header-icon">
          <IoIosAddCircle />
        </div>
        <h1>ADICIONAR EVENTO</h1>
      </div>
      <form>
        <div class="form-group">
          <label for="titulo">
            {/* <img src="imgform/lightbulb.svg" alt="Icone de Título"> */}
          </label>
          <input type="text" id="titulo" name="titulo" placeholder="Título" />
        </div>
        <div class="form-group datetime-group">
          <div class="date-time">
            <label for="data">
              <FaCalendarAlt />
            </label>
            <input type="date" id="data" name="data" />
          </div>
        </div>
        <div class="form-group">
          <label for="local">
            <FaMapPin />
          </label>
          <input type="text" id="local" name="local" placeholder="Local" />
        </div>
        <div class="form-group">
          <label for="descricao">
            {/* <img src="imgform/chat-left-text.svg" alt="Icone de Descrição"> */}
          </label>
          <input
            type="text"
            id="descricao"
            name="descricao"
            placeholder="Descrição e maiores informações..."
          />
        </div>
        <div class="form-group">
          <label for="foto">
            <FaCamera />
          </label>
          <input type="file" id="foto" name="foto" />
        </div>
        <div class="buttons">
          <button type="button" class="cancelar">
            Cancelar
          </button>
          <button type="submit" class="adicionar">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
}
