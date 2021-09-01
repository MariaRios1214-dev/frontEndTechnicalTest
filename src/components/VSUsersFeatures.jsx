import React from 'react';
import { connect } from 'react-redux';
import Octocat from '../assets/img/Octocat.png';
import FeaturesCard from '../features/featuresCard/FeaturesCard';
import HttpServices from '../services/HttpServices';

const VSUsersFeatures = ({ userContext, getAllRepos }) => {
  const filterValues = values => {
    console.log('valuesChange', values.target.value);
    const value = values.target.value;
    const searchAnyType = value
      .normalize('NFD')
      .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, '$1$2')
      .normalize()
      .toUpperCase();
    console.log('searchAnyType', searchAnyType);
  };

  return (
    <div className="searchFeatures">
      <div className="positionsCards">
        {userContext?.length >= 1 &&
          userContext.map((user, key) => {
            return <FeaturesCard key={user.key} values={user} logo={Octocat} />;
          })}
      </div>
      <div className="positionsCards"></div>
      <div className="align-component">
        <input
          type="text"
          className="search-input"
          onChange={filterValues}
          name="textFilter"
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  // getAllRepos(){
  //   HttpServices()
  //           .get(`/users/${values.username}/repos`)
  //           .then(response => {
  //             if (response) {
  //               dispatch({
  //                 type: 'GET_ALL_INFORMATION',
  //                 payload: values,
  //               });
  //             }
  //           });
  // }
});
const mapStateToProps = state => ({ userContext: state });
export default connect(mapStateToProps, mapDispatchToProps)(VSUsersFeatures);
