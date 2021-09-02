import React, { useState } from 'react';
import { connect } from 'react-redux';
import Octocat from '../assets/img/Octocat.png';
import LoginCard from '../libs/loginCard/loginCard';
import HttpServices from '../services/HttpServices';
import FeaturesCard from '../libs/featuresCard/featuresCard';
import VSUsersFeatures from './VSUsersFeatures';
import Button from '../libs/button/button';

const Login = ({ handleSubmit, userContext }) => {
  const [activeComparation, setActiveComparation] = useState(false);
  const infoUserA = userContext?.filter(user => user.key === '1');
  const infoUserB = userContext?.filter(user => user.key === '2');

  return (
    <div>
      {!activeComparation ? (
        <div className="positionsCards">
          {infoUserA && infoUserA.length >= 1 ? (
            <FeaturesCard
              values={infoUserA[0]}
              totalDetail
              key="1"
              logo={Octocat}
            />
          ) : (
            <LoginCard
              key="1"
              handleSubmitFunction={e => {
                handleSubmit(e, '1');
              }}
              logo={Octocat}
            />
          )}
          <strong>VS</strong>
          {infoUserB && infoUserB.length >= 1 ? (
            <FeaturesCard
              values={infoUserB[0]}
              totalDetail
              key="2"
              logo={Octocat}
            />
          ) : (
            <LoginCard
              key="2"
              handleSubmitFunction={e => {
                handleSubmit(e, '2');
              }}
              logo={Octocat}
            />
          )}
        </div>
      ) : (
        <VSUsersFeatures />
      )}
      {!activeComparation &&
        infoUserA &&
        infoUserA.length >= 1 &&
        infoUserB &&
        infoUserB.length >= 1 && (
          <div className="align-component">
            <Button
              children="Compara las cuentas"
              type="submit"
              name="buttonVSUsersFeatures"
              disabled={false}
              onClick={() => setActiveComparation(true)}
            />
          </div>
        )}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  handleSubmit(values, key) {
    HttpServices()
      .get(`/users/${values.username}`)
      .then(responseLogin => {
        const totalRepos = [];
        if (responseLogin) {
          HttpServices()
            .get(`/users/${values.username}/repos`)
            .then(responseRepos => {
              if (responseRepos) {
                responseRepos.map((repo, id) =>
                  HttpServices()
                    .get(`/repos/${values.username}/${repo.name}/languages`)
                    .then(languagesRepos => {
                      totalRepos.push({
                        name: repo.name,
                        languages: languagesRepos,
                      });
                    })
                );
                dispatch({
                  type: 'SIGN_IN',
                  payload: {
                    ...responseLogin,
                    key: key,
                    totalReposByUser: totalRepos,
                  },
                });
              } else {
                dispatch({
                  type: 'SIGN_IN',
                  payload: {
                    ...responseLogin,
                    key: key,
                  },
                });
              }
            });
        }
      });
  },
});
const mapStateToProps = state => ({
  userContext: state,
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
