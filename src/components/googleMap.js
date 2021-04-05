import React,{useRef} from 'react'
import PropTypes from 'prop-types'


import { 
    GoogleMap,
    LoadScript,
    Marker,
    Autocomplete,
    StandaloneSearchBox
     } from '@react-google-maps/api';
import { SearchBox } from 'react-google-maps';

import {API_KEY_GG_MAP} from '../apiKey/API.key'

function GoogleMapComponent({adress}) {

    const containerStyle = {
        width: 'inherit',
        height: '100vh'
      };
    const center = {
        lat: adress? parseFloat(adress.lat): 17.359473 ,
        lng: adress? parseFloat(adress.lng): 102.4648928 
    };
    let position = adress?{
        lat: adress? parseFloat(adress.lat): 0 ,
        lng: adress? parseFloat(adress.lng): 0 
    }:null;
    
    

    // function handleLoad() {}

    // function onLoad (autocomplete) {
    //     console.log('autocomplete: ', autocomplete)
    // }
    // function hanldePlacesChanged(address) {
    //     const results = geocodeByAddress(address);
    //     const latLng = getLatLng(results[0]);
    //     console.log(latLng);
    // }

    return (
        <LoadScript
            googleMapsApiKey={API_KEY_GG_MAP}
            libraries={["places"]}
            >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={7}
            >
                {
                    position&&<Marker
                    key={1} 
                    position={position}
                    animation = {Animation} 
                     />
                }
                
                {/* <StandaloneSearchBox
                    onLoad={handleLoad}
                    onPlacesChanged={hanldePlacesChanged}
                    >
                    <input
                        type="text"
                        placeholder="Customized your placeholder"
                        value = {position.lat}
                        style={{
                        boxSizing: `border-box`,
                        border: `1px solid transparent`,
                        width: `240px`,
                        height: `32px`,
                        padding: `0 12px`,
                        borderRadius: `3px`,
                        boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                        fontSize: `14px`,
                        outline: `none`,
                        textOverflow: `ellipses`,
                        position: "absolute",
                        left: "50%",
                        marginLeft: "-120px"
                        }}
                    />
                </StandaloneSearchBox> */}
            

            </GoogleMap>
        </LoadScript>
    )
}

GoogleMapComponent.propTypes = {

}

export default GoogleMapComponent

