import React, { useState } from 'react';
import { connect } from 'react-redux';
import Octocat from '../assets/img/Octocat.png';
import CardLogin from '../features/cardLogin/CardLogin';

const Login = () => {
    const [initialValues, setInitialValues] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInitialValues({
            ...initialValues,
            [name]: value
        });
    }
console.log('sssssssss', initialValues)
    const handleSubmit = (e) => {

    };

    return (
     <div className="login">
            <CardLogin
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            logo={Octocat}
        />
           <CardLogin
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            logo={Octocat}
        />
     </div>
    )
}

const mapStateToProps = (state) => {

}
const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login);