import React from 'react';
import './featuresCard.scss';

const FeaturesCard =({logo, totalDetail})=>{
return(
    <div className="featuresCard" id="propsCard">
   <section className="icon-github">
   <img src={logo} alt="Avatar" className="avatar"/>
   </section>
   <section>
        <img src={logo} alt="Avatar" className="avatar"/>
        <h2>Nombre persona</h2>
   </section>
      {totalDetail &&
       <section className="infoUser">
           <article>
           <i class="fas fa-star"/> <span>Estrellas</span>
           </article>
           <article>
           <i class="fas fa-user-friends"/> <span>Seguidores</span>
           </article>
           <article>
           <i class="fas fa-users"/> <span>Seguidos</span>
           </article>
           <article>
           <i class="fas fa-hand-spock"/> <span>Proyectos públicos</span>
           </article>
           <article>
           <i class="fas fa-link"/> <span>link</span>
           </article>
           <article>
           <i class="fas fa-link"/> <span>Lenguajes</span>
           </article>
       </section>}
   </div>
)
};
export default FeaturesCard;