import { Formik } from 'formik';
import React from 'react';
import './loginCard.scss';

const LoginCard = ({ handleSubmitFunction, logo }) => {
  return (
    <div className="loginCard" id="propsCard">
      <div className="iconEnterprise">
        <img src={logo} alt="img-logo" />
      </div>
      <div className="form">
        <Formik
          initialValues={{ username: '', password: '' }}
          validateOnMount={true}
          validateOnBlur={true}
          enableReinitialize={true}
          onSubmit={handleSubmitFunction}
        >
          {({ handleSubmit, handleChange, values }) => (
            <form>
              <h3>Username or email address</h3>
              <input
                name={`username`}
                type="text"
                required
                onChange={handleChange}
              />
              <h3>Password</h3>
              <input
                name={`password`}
                type="password"
                onChange={handleChange}
              />
              <div className="button-sign">
                <button
                  className="component-event"
                  type="submit"
                  name="buttonLogin"
                  disabled={!values.username}
                  onClick={handleSubmit}
                >
                  <strong>Sign in</strong>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginCard;
