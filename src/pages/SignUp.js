import React from 'react'
import PropTypes from 'prop-types'
import {Button,Form,FormLayout,TextField} from '@shopify/polaris';
import { useState,useCallback,useContext } from 'react';
import {MainContext} from './../contexts/Main.context';
import styled from 'styled-components'

import ReCAPTCHA from "react-google-recaptcha";

import { Link } from 'react-router-dom';


function SignUp(props) {
    const {state,addUser} = useContext(MainContext);

    
    const [fullName, setFullName] = useState();
    const [adress, setAdress] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
  
    const handleChangeName = useCallback((value) =>{setFullName(value)}, [fullName]);
    const handleChangeAdress = useCallback((value) =>{setAdress(value)}, [adress]);
    const handleChangeEmail = useCallback((value) =>{setEmail(value)}, [email]);
    const handleChangePhone = useCallback((value) =>{setPhoneNumber(value)}, [phoneNumber]);

    const recaptchaRef = React.createRef();
    
  
    const handleSubmit = useCallback((_event) => {
        addUser({
            full_name: fullName,
            adress: adress,
            email: email,
            phone : phoneNumber
        });
        props.history.push('/ListAccount')
    }, [fullName,adress,email, phoneNumber]);
    return (
        <SignUpWrap>
           <Form onSubmit={handleSubmit}>
             <FormLayout>
               <TextField label="Full name" value={fullName} onChange={handleChangeName} />
               <TextField type="text" label="Adress" value={adress} onChange={handleChangeAdress} />
               <TextField type="email" label="Email" value={email} onChange={handleChangeEmail} />
               <TextField label="Phone number" value={phoneNumber} onChange={handleChangePhone} />

               <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey="Your client site key"
                // onChange={onChange}
              />

               <Button
                 submit
                 primary={true}
                 fullWidth={true}
                 id="marketing-button"
               >
                 Create your account
                 <Link to = './ListAccount' ></Link>
               </Button>
             </FormLayout>
           </Form>
        </SignUpWrap>
    )
}

SignUp.propTypes = {

}

const SignUpWrap = styled.div`
    width: 500px;
    margin: 100px auto 0;
    padding: 30px;
    background-color: #f5f5dc;
    box-shadow: 0px 0px 10px #ccc;
`

export default SignUp

