import React, { useState } from 'react';
import { connect } from 'react-redux';
import Octocat from '../assets/img/Octocat.png';
import LoginCard from '../features/loginCard/LoginCard';
import HttpServices from '../services/HttpServices';
import FeaturesCard from '../features/featuresCard/FeaturesCard';
import VSUsersFeatures from './VSUsersFeatures';

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
            <button
              className="component-event"
              onClick={() => setActiveComparation(true)}
            >
              Compara las cuentas
            </button>
          </div>
        )}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  handleSubmit(values, key) {
    HttpServices()
      .get(`/users/${values.username}`)
      .then(response => {
        if (response) {
          dispatch({
            type: 'SIGN_IN',
            payload: {
              ...response,
              key: key,
            },
          });
        }
      });
  },
});
const mapStateToProps = state => ({
  userContext: state,
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
