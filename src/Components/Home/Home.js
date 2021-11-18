import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import About from '../About/About';
import AllPlans from '../AllPlans/AllPlans';
import Bannar from '../Bannar/Bannar';
// import Bannar from '../Bannar/Bannar';
import HappyCustomers from '../HappyCustomers/HappyCustomers';


const Home = () => {

    const {isLoading} = useAuth();
    if(isLoading){
        return <Spinner animation="border" variant="secondary" />
    }
    return (
        <div>
            <Bannar></Bannar>

            <div className='title my-3'>
            <h2>Tour Plans</h2><hr/>
            </div>
           <div className='container mb-5'>
           
           <AllPlans></AllPlans>
            
           </div>


            <About></About>
            <HappyCustomers></HappyCustomers>
        </div>
    );
};

export default Home;