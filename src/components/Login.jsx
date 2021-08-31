import React, { useState } from 'react';
import { connect } from 'react-redux';
import Octocat from '../assets/img/Octocat.png';
import LoginCard from '../features/loginCard/LoginCard';

const Login = ({handleSubmit}) => {
    const [initialValues, setInitialValues] = useState({username: '',
    password: ''
        // users:[
        //     {
        //         username: '',
        //         password: ''
        //     }
        // ]
            });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInitialValues({
            ...initialValues,
            [name]: value
        });
    }
console.log('sssssssss', initialValues)
    

    return (
     <div className="positionsCards">
            <LoginCard
            key='1'
            handleChange={handleChange}
            handleSubmit={() =>handleSubmit(initialValues)}
            logo={Octocat}
            initialValues={initialValues}
        />
<strong>VS</strong>        
   <LoginCard
            key='2'
            handleChange={handleChange}
            handleSubmit={() =>handleSubmit(initialValues)}
            logo={Octocat}
            initialValues={initialValues}
        />
     </div>
    )
}

const mapDispatchToProps = dispatch => ({
        handleSubmit(values){
        dispatch({
            type:'LOGIN',
            payload:values
        })
    }
});
export default connect(null, mapDispatchToProps)(Login);