import React from 'react';
import './featuresCard.scss';

const FeaturesCard = ({ logo, totalDetail, values }) => {
  return (
    <div className="featuresCard" id="propsCard">
      <section className="icon-github">
        <img src={logo} alt="Avatar" className="avatar" />
      </section>
      <section>
        <img src={values?.avatar_url} className="avatar" alt="avatar"></img>
        <h2>{values?.name}</h2>
        <p>{values?.login}</p>
      </section>
      {totalDetail && (
        <section className="infoUser">
          <article>
            <i className="fas fa-star" id="fa-star" /> <span>Estrellas</span>
          </article>
          <article>
            <i className="fas fa-user-friends" id="fa-user-friends" />
            <span>{values?.followed}</span>
            <span>Seguidores</span>
          </article>
          <article>
            <i className="fas fa-users" id="fa-users" />{' '}
            <span>{values?.following}</span>
            <span>Seguidos</span>
          </article>
          <article>
            <i className="fas fa-hand-spock" id="fa-hand-spock" />
            <span>{values?.public_repos}</span>
            <span>Proyectos públicos</span>
          </article>
          <article>
            <i className="fas fa-link" id="fa-link" />
            <a href={values?.html_url}>Perfil GitHub</a>
          </article>
        </section>
      )}
    </div>
  );
};
export default FeaturesCard;
