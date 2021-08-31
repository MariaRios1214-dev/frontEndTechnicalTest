import React from 'react';
import Octocat from '../assets/img/Octocat.png';
import FeaturesCard from '../features/featuresCard/FeaturesCard';
const listSelector=[
    {
    name:'Proyectos',
    value:'project'
},
    {
    name:'Seguidores',
    value:'followed'
},
    {
    name:'Seguidos',
    value:'follwing'
},
    {
    name:'Commits',
    value:'commits'
},


]
const VSUsersFeatures =()=> {

const handleChandeSelector = (values)=>{
    console.log('valuesChange', values)
}

return(
    <div className="searchFeatures">
         <div className="positionsCards">
<FeaturesCard
   logo={Octocat}
   />
<FeaturesCard
   logo={Octocat}
   />
         </div>
<select name="listSearch" id="listSearch">
{listSelector?.map(value =>{ 
return(
<option
value={value.value}
onChange={handleChandeSelector}
>{value.name}</option>
)})}

</select>
    </div>

)
};

export default VSUsersFeatures;