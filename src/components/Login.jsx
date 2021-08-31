import React, { useState } from 'react';
import { connect } from 'react-redux';
import Octocat from '../assets/img/Octocat.png';
import LoginCard from '../features/loginCard/LoginCard';

const Login = ({handleSubmit}) => {
    const [initialValues, setInitialValues] = useState({
        userA:{
            usernameA   : '',
            passwordA: '',
        }, 
        userB:{
        usernameB   : '',
        passwordB: ''}
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
     <div className="login">
            <LoginCard
            key='A'
            id='A'
            handleChange={handleChange}
            handleSubmit={() =>handleSubmit(initialValues)}
            logo={Octocat}
        />
           <LoginCard
            key='B'
            id='B'
            handleChange={handleChange}
            handleSubmit={() =>handleSubmit(initialValues)}
            logo={Octocat}
        />
     </div>
    )
}

const mapDispatchToProps = dispatch => ({
        handleSubmit(values){debugger
        dispatch({
            type:'LOGIN',
            payload:values
        })
    }
});
export default connect(null, mapDispatchToProps)(Login);