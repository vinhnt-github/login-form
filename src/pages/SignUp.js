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

import ReCAPTCHA from "react-grecaptcha";

import { Link } from 'react-router-dom';
import {API_KEY_CAPCHA} from '../apiKey/API.key'


function SignUp(props) {
    const {state,addUser} = useContext(MainContext);
    
    
    const [fullName, setFullName] = useState();
    const [adress, setAdress] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();


    const [errors, setErrors] = useState({});



    function validateForm() {

      let errors = {};
      let formIsValid = true;

      if (!fullName) {
        formIsValid = false;
        errors["name"] = "Please enter your username.";
      }

      if (typeof fullName !== "undefined") {
        if (!fullName.match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["name"] = "Please enter alphabet characters only.";
        }
      }
      if (!adress) {
        formIsValid = false;
        errors["adress"] = "Please enter your adress.";
      }

      if (!email) {
        formIsValid = false;
        errors["emaill"] = "Please enter your email.";
      }
      if (!phoneNumber) {
        formIsValid = false;
        errors["phoneNumber"] = "Please enter your mobile no.";
      }

      if (typeof phoneNumber !== "undefined") {
        if (!phoneNumber.match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["phoneNumber"] = "Please enter valid mobile no.";
        }
      }


      setErrors({
        ...errors
      })
      return formIsValid;


    }


    const recaptchaRef = useRef(false);
  
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
      if(!validateForm()||!recaptchaRef.current){
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
               <TextField label="Full name" value={fullName} onChange={handleChangeName} error={errors.name}/>
               <TextField type="text" label="Adress" value={adress} onChange={handleChangeAdress} error={errors.adress}/>
               <TextField type="email" label="Email" value={email} placeholder = "ex: myname@example.com" onChange={handleChangeEmail} error={errors.emaill}/>
               <TextField type="text" label="Phone number" value={phoneNumber} onChange={handleChangePhone} error={phoneNumber ? "" : "Phone Number is required"} error={errors.phoneNumber}/>

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

