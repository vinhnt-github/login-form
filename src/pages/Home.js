import PropTypes from 'prop-types';

import {MainContext} from './../contexts/Main.context';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@shopify/polaris';


function Home(props) {
    const context = React.useContext(MainContext);
    console.log(context);
    return (
        <div>
            <p>Welcome to HomePage</p>
            <Button
            primary={true}
            >
                <Link to = '/SignUp' >aaaaaaa</Link>
            </Button>
        </div>
    )
}

Home.propTypes = {

}

export default Home;

