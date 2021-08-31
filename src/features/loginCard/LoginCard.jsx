import React from "react";
import './loginCard.scss';

const LoginCard = ({
    id,
    handleSubmit,
    handleChange,
    logo,
    initialValues
}) => {
    return (
        <div className="loginCard" id="propsCard">
            <div className="iconEnterprise">
                <img src={logo} alt="img-logo" />
            </div>
            <div className="form">
                <form action="submit">
                    <h3>Username or email address</h3>
                    <input
                        name={`username${id}`}
                        type="text"
                        required
                        onChange={handleChange} />
                    <h3>Password</h3>
                    <input
                        name={`password${id}`}
                        type="password"
                        required onChange={handleChange} />
                    <div className="button-sign">
                    <button
                    name={`buttonUser${id}`}
                     onClick={() =>handleSubmit(initialValues)}><strong>Sign in</strong></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginCard;