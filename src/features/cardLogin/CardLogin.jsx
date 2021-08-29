import React from "react";
import './cardLogin.scss';

const CardLogin = ({
    handleSubmit,
    handleChange,
    logo
}) => {
    return (
        <div className="cardLogin" >
            <div className="iconEnterprise">
                <img src={logo} alt="img-logo" />
            </div>
            <div className="form">
                <form action="submit">
                    <h3>Username or email address</h3>
                    <input
                        name='username'
                        type="text"
                        required
                        onChange={handleChange} />
                    <h3>Password</h3>
                    <input name='password'
                        type="password"
                        required onChange={handleChange} />
                    <div className="button-sign">
                    <button onClick={handleSubmit}><strong>Sign in</strong></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CardLogin;