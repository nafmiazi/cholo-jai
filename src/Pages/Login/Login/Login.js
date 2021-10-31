import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Login.css'


const Login = () => {
    const {signInUsingGoogle, setUsers} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then((result) => {
            setUsers(result.user);
            history.push(redirect_uri);
        })
    }
    
    return (
        <div className="text-center login-form mx-auto bg-light text-black my-5 rounded shadow-lg">
            <div>
                <img className="mt-5" src={logo} alt="" />
                <h2 className="mb-4"><span className="icon-name">Cholo Jai</span> Your Holiday Planner</h2>
            </div>

            <button onClick={handleGoogleLogin} className="btn btn-warning mb-5"><i className="fab fa-google text-success me-2"></i> Sign In with Google</button>
        </div>
    );
};

export default Login;