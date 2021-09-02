import React, { useState } from 'react';
import { connect } from 'react-redux';
import Octocat from '../assets/img/Octocat.png';
import FeaturesCard from '../libs/featuresCard/featuresCard';
import listSearch from './listSearch.json';
let listFilters = [];
function eliminarObjetosDuplicados(arr, prop) {
  var nuevoArray = [];
  var lookup = {};
  for (var i in arr) {
    lookup[arr[i][prop]] = arr[i];
  }
  for (i in lookup) {
    nuevoArray.push(lookup[i]);
  }
  return nuevoArray;
}
const VSUsersFeatures = ({ userContext }) => {
  const [valuesSearchFilter, setValuesSearchFilter] = useState([]);
  const [textValue, setTextValue] = useState('');

  const filterValues = values => {
    const value = values.target.value;
    setTextValue(value);

    if (value === '') {
      listFilters = [];
    } else {
      const searchAnyType = value
        .normalize('NFD')
        .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, '$1$2')
        .normalize()
        .toUpperCase();
      const valuesFiltered = listSearch.filter(search =>
        search.name.includes(searchAnyType)
      );
      var duplicadosEliminados = eliminarObjetosDuplicados(
        valuesFiltered,
        'titleCard'
      );
      if (duplicadosEliminados && duplicadosEliminados?.length >= 1) {
        userContext?.map(userCont =>
          duplicadosEliminados.filter(filter =>
            filter.valueSearch === 'totalReposByUser' &&
            userCont[filter.valueSearch].length >= 1
              ? userCont[filter.valueSearch].map(repo =>
                  listFilters.push({
                    title: filter.titleCard,
                    key: userCont.key,
                    fieldFilter: filter.valueSearch,
                    search: repo?.name,
                    searchLanguages: repo?.languages,
                  })
                )
              : listFilters.push({
                  title: filter.titleCard,
                  key: userCont.key,
                  fieldFilter: filter.valueSearch,
                  search: userCont[filter.valueSearch],
                  searchLanguages: [],
                })
          )
        );
      } else {
        listFilters = [];
      }
    }
    var valueSearch = eliminarObjetosDuplicados(listFilters, 'key');
    setValuesSearchFilter(valueSearch);
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
          value={textValue}
        />
        <div className="positionsCards">
          {valuesSearchFilter &&
            valuesSearchFilter.length >= 1 &&
            valuesSearchFilter.map(values => (
              <div id="propsCard" key={values.key}>
                <h2>{values.tile}</h2>
                <li>{values.search}</li>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({});
const mapStateToProps = state => ({ userContext: state });
export default connect(mapStateToProps, mapDispatchToProps)(VSUsersFeatures);
