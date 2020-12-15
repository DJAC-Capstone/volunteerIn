import React, { useEffect, useState, useCallback, useLayoutEffect } from "react";
import axios from "axios";
import { GoogleMap, LoadScript, GoogleMapPin, Marker } from '@react-google-maps/api';
import { MAP_API } from './secrets'
 
const containerStyle = {
  margin: "1rem",
  border:"black 1px solid",
  width: "55rem",
  height: "35rem",
};
 
function DisplayMaps({event}) {
  // console.log(event)
  const [loc, setLoc] = useState({lat:0, lng:0});
 
  const stringAdd = `${event.street_address}, ${event.city}, ${event.state}, ${event.zip_code}`

  const getLatAndLongFromAddress = async (add) => {
    add = stringAdd && encodeURIComponent(add);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${add}&key=${MAP_API}`;
    const { data } = await axios.get(url);
    const  { lat, lng } = data.results[0].geometry.location;
    setLoc({lat: lat, lng:lng})
  };

  useEffect(() => {
    const address = stringAdd;
    getLatAndLongFromAddress(address);
  }, [event]); 


  return (
    <LoadScript googleMapsApiKey={MAP_API}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={loc}
        zoom={10}
      >
        <Marker position = {loc}/>
      </GoogleMap>
    </LoadScript>
  )
}
 
export default DisplayMaps

