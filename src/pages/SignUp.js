import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Form,
  FormLayout,
  TextField,
  Card,
  Heading,
  DisplayText,
  TextContainer
} from '@shopify/polaris';
import { useState,useCallback,useContext,useRef } from 'react';
import {MainContext} from './../contexts/Main.context';
import styled from 'styled-components'

// import ReCAPTCHA from "react-google-recaptcha";
import ReCAPTCHA from "react-grecaptcha";

import { Link } from 'react-router-dom';
import {API_KEY_CAPCHA} from '../apiKey/API.key'

import { Adress } from '../apiKey/Adress';


function SignUp(props) {
    const {state,addUser} = useContext(MainContext);
    
    
    const [fullName, setFullName] = useState();
    const [adress, setAdress] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    const recaptchaRef = useRef(false);

    // useEffect(() => {
    //   // refCapcha = false;
    // }, [])
  
    const handleChangeName = useCallback((value) =>{setFullName(value)}, [fullName]);
    const handleChangeAdress = useCallback((value) =>{setAdress(value)}, [adress]);
    const handleChangeEmail = useCallback((value) =>{setEmail(value)}, [email]);
    const handleChangePhone = useCallback((value) =>{setPhoneNumber(value)}, [phoneNumber]);

    const callback = response => {
      if(response){
        recaptchaRef.current = true;
      }
    };
    const expiredCallback = response =>  {
      recaptchaRef.current.reset();
    };
    const handleSubmit = useCallback((_event) => {
      if(!fullName||!adress||!email||!phoneNumber||!recaptchaRef.current){
        return;
      }
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
          <TextContainer spacing="tight">
            
          </TextContainer>
            <Form onSubmit={handleSubmit}>
              <DisplayText size="large">Registration form</DisplayText>
             <FormLayout>
               <TextField label="Full name" value={fullName} onChange={handleChangeName} error={fullName ? "" : "Name is required"}/>
               <TextField type="text" label="Adress" value={adress} onChange={handleChangeAdress} error={adress ? "" : "Name is required"}/>
               <TextField type="email" label="Email" value={email} placeholder = "ex: myname@example.com" onChange={handleChangeEmail} error={email ? "" : "Name is required"}/>
               <TextField label="Phone number" value={phoneNumber} onChange={handleChangePhone} error={phoneNumber ? "" : "Name is required"}/>

               <ReCAPTCHA
                ref = {()=>callback()}
                size="invisible"
                sitekey= {API_KEY_CAPCHA}
                locale="en"
                callback = {callback}
                expiredCallback = {expiredCallback}
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 30px;
  background-color: #f5f5dc;
  box-shadow: 0px 0px 10px #ccc;
  @media only screen and (max-width: 575px) {
    width: calc( 100% - 30px );
  }
    .Polaris-DisplayText{
      padding-bottom: 15px;
      border-bottom: 1px solid #d3d3d3;
      margin-bottom: 30px;
    }
`

export default SignUp

