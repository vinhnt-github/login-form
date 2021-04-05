import PropTypes from 'prop-types';

import {MainContext} from './../contexts/Main.context';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Button,
    Heading
} from '@shopify/polaris';


function Home(props) {
    const context = React.useContext(MainContext);
    console.log(context);
    return (
        <div>
            <Heading>Welcome to HomePage</Heading>
            <Button
            primary={true}
            >
                <Link to = '/SignUp' >Sign Up</Link>
            </Button>
        </div>
    )
}

Home.propTypes = {

}

export default Home;

