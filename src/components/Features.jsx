import React from 'react';
import Octocat from '../assets/img/Octocat.png';
import FeaturesCard from '../features/featuresCard/FeaturesCard';

const Features = ()=>{
console.log('dddddddddd')
return(
  <div className="positionsCards">
      <FeaturesCard
logo={Octocat}
      />
          <strong>VS</strong>
      <FeaturesCard
logo={Octocat}
      />
  </div>
)
};

export default Features;