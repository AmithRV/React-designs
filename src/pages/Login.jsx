import React from 'react';
import '../styles/login.css';

function Login() {
  return (
    <form>
      <div className="login-wrap">
        <div className="login">
          <div className="section">
            <span className="label">USER ID</span>
            <input className="user-input" autoComplete="off" />
          </div>
          <div className="section">
            <span className="label">PASSWORD</span>
            <input className="user-input" type="password" autoComplete="off" />
          </div>

          <div className="action-section">
            <button className="action-btn" type="submit">
              SUBMIT
            </button>
            <button className="action-btn" type="reset">
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
