import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Others from '../Others/Others';

const Home = () => {
    const {isLoading} = useAuth();
    if(isLoading){
        return <Spinner className="spinner d-grid m-auto" animation="border" variant="danger" />
    }
    
    return (
        <div>
            <Banner></Banner>
            <Destinations></Destinations>
            <Others></Others>
        </div>
    );
};

export default Home;