import React from 'react'
import "./inicioequipe.css";

// IMAGENS
import Jorgin from "../../images/Jorgin.jpg"

// ICONES
import { RiTeamFill } from "react-icons/ri";

export default function InicioEquipe(){
  return(
    <div className='container_equipe'>
      <div className="title_equipe">
        <h1>Equipe parceira <RiTeamFill /></h1>
      </div>

      <div className='pessoa'>
        <div className="foto">
          <img src={Jorgin} alt="Foto de perfil do Jorginho"/>
        </div>
        <div className="info">
          <h2>Fulano da Silva</h2>
          <h4>Coordenadora da Fundação</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum, nisi et ullamcorper dapibus, libero nibh tincidunt mauris, ornare mollis nisi orci scelerisque lorem. Praesent aliquet quam sed semper rutrum. Aenean id diam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum, nisi et ullamcorper dapibus, libero nibh tincidunt mauris, ornare mollis nisi orci scelerisque lorem. Praesent aliquet quam sed semper rutrum. Aenean id diam urna. </p>
        </div>
      </div>

      <div className='pessoa'>
        <div className="info">
          <h2>Fulano da Silva</h2>
          <h4>Coordenadora da Fundação</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum, nisi et ullamcorper dapibus, libero nibh tincidunt mauris, ornare mollis nisi orci scelerisque lorem. Praesent aliquet quam sed semper rutrum. Aenean id diam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum, nisi et ullamcorper dapibus, libero nibh tincidunt mauris, ornare mollis nisi orci scelerisque lorem. Praesent aliquet quam sed semper rutrum. Aenean id diam urna. </p>
        </div>
        <div className="foto">
          <img src={Jorgin} alt="Foto de perfil do Jorginho"/>
        </div>
      </div>

      <div className='pessoa'>
        <div className="foto">
          <img src={Jorgin} alt="Foto de perfil do Jorginho"/>
        </div>
        <div className="info">
          <h2>Fulano da Silva</h2>
          <h4>Coordenadora da Fundação</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum, nisi et ullamcorper dapibus, libero nibh tincidunt mauris, ornare mollis nisi orci scelerisque lorem. Praesent aliquet quam sed semper rutrum. Aenean id diam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum, nisi et ullamcorper dapibus, libero nibh tincidunt mauris, ornare mollis nisi orci scelerisque lorem. Praesent aliquet quam sed semper rutrum. Aenean id diam urna. </p>
        </div>
      </div>

      <div className='pessoa'>
        <div className="info">
          <h2>Fulano da Silva</h2>
          <h4>Coordenadora da Fundação</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum, nisi et ullamcorper dapibus, libero nibh tincidunt mauris, ornare mollis nisi orci scelerisque lorem. Praesent aliquet quam sed semper rutrum. Aenean id diam urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum, nisi et ullamcorper dapibus, libero nibh tincidunt mauris, ornare mollis nisi orci scelerisque lorem. Praesent aliquet quam sed semper rutrum. Aenean id diam urna. </p>
        </div>
        <div className="foto">
          <img src={Jorgin} alt="Foto de perfil do Jorginho"/>
        </div>
      </div>
    </div>
  )
}