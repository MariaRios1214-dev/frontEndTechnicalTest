import React from 'react';
import Octocat from '../assets/img/Octocat.png';

const Features = ()=>{
console.log('dddddddddd')
return(
   <div className="featuresCard" id="propsCard">
   <section className="icon-github">
   <img src={Octocat} alt="Avatar" className="avatar"/>
   </section>
   <section>
        <img src={Octocat} alt="Avatar" className="avatar"/>
        <h2>Nombre persona</h2>
   </section>
       <section className="infoUser">
           <article>
               <img src="" alt="img-start" /> <span>Estrellas</span>
           </article>
           <article>
               <img src="" alt="img-start" /> <span>Commits</span>
           </article>
           <article>
               <img src="" alt="img-start" /> <span>Proyectos</span>
           </article>
       </section>
   </div>
)
};

export default Features;