import { useMemo } from "react";
import {GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  const center = {
    lat: -3.745,
    lng: -38.523
  };
  
  

export default function OurGoogleMap() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOLE_MAPS_API_KEY,
    })
    if(!isLoaded) return <div>Loading...</div>
    return <Map />
}

function Map() {
    return 
    <GoogleMap zoom={10} 
    center={{ lat: 44, lng: -80}}
    mapContainerClassName="map-container"
    mapContainerStyle={containerStyle}
    >
        <Marker position={{ lat: 44, lng: -80}}/>
    </GoogleMap>
}