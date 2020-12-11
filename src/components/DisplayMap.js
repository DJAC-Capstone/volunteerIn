import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import { GoogleMap, LoadScript, GoogleMapPin, Marker } from '@react-google-maps/api';
import { MAP_API } from './secrets'
 
const containerStyle = {
  width: '250px',
  height: '200px'
};
 
 
function DisplayMaps({event}) {
  console.log(event)
  const [map, setMap] = useState(null);
  const [loc, setLoc] = useState({lat:0, lng:0});
 

  const {street_address, city, state, zip_code } = event
  const newAdd = {
    street_address,
    city,
    state,
    zip_code
  }

  const stringAdd = Object.keys(newAdd).reduce(function(acc, v) {
      return acc.concat(' ', `${newAdd[v]},`);
  }, '');
 
  
  const onLoad = useCallback(function callback(map) {
  }, [])
 
  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])
 
  const getLatAndLongFromAddress = async (add) => {
    // im gonna translate the address to a lat and long
    add = !!event && encodeURIComponent(add);
    console.log(add)
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${add}&key=${MAP_API}`;
    const { data } = await axios.get(url);
    const  { lat, lng } = data.results[0].geometry.location;
    console.log(url)
    console.log(add)
    console.log(data)
    console.log(lat, lng)
    setLoc({lat: lat, lng:lng})
  };


  useEffect(() => {
    
    const address = stringAdd;
    getLatAndLongFromAddress(address);
console.log(address)
  }, []); 

  return (
    <LoadScript
      googleMapsApiKey={MAP_API}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={loc}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
            <Marker
      // onLoad={onLoad}
      position={loc}
    />
        <></>
      </GoogleMap>
    </LoadScript>
  )
}
 
export default connect(
    (state) => ({
        event:  state.events.event,
		user: state.users.user

      }),
)(DisplayMaps)

