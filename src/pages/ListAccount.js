import React from 'react'
import PropTypes from 'prop-types'
import { useContext,useState,useEffect } from 'react';

import GoogleMapComponent from './../components/googleMap'
import ListUser from '../components/ListUser'


import {Card,Layout} from '@shopify/polaris';
import styled from 'styled-components';






function ListAccount(props) {
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
          });
    }, [])
    
    const [adressUser,setAdressUser] = useState(null)
    const handelClick = (value) =>{
        setAdressUser({
            lat : value.lat,
            lng : value.lng
        })
    }
   
    return (
        
        <ListAccountWrap>
            <Layout>
                <Layout.Section secondary>
                    <ListUser handelClick = {handelClick}/>
                </Layout.Section>
                <Layout.Section>
                    <Card >
                        <GoogleMapComponent adress = {adressUser}/>
                    </Card>
                </Layout.Section>
            </Layout>
        </ListAccountWrap>
    )
}

ListAccount.propTypes = {

}
const ListAccountWrap = styled.div`

`

export default ListAccount

