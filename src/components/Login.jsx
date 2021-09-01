import React, { useState } from 'react';
import { connect } from 'react-redux';
import Octocat from '../assets/img/Octocat.png';
import LoginCard from '../features/loginCard/LoginCard';
import HttpServices from '../services/HttpServices';
import FeaturesCard from '../features/featuresCard/FeaturesCard';

const Login = ({ handleSubmit, userContext }) => {
  const isUserA = userContext?.filter(user => user.key === '1');
  const isUserB = userContext?.filter(user => user.key === '2');
  return (
    <div className="positionsCards">
      {isUserA && isUserA.length >= 1 ? (
        <FeaturesCard values={isUserA[0]} totalDetail key="1" logo={Octocat} />
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
      {isUserB && isUserB.length >= 1 ? (
        <FeaturesCard values={isUserB[0]} totalDetail key="2" logo={Octocat} />
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
