import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    
    const {users, isLoading} = useAuth();
    if(isLoading) {
        return <Spinner className="spinner d-grid m-auto" animation="border" variant="danger" />
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                users.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivateRoute;