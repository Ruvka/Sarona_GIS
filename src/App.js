import logo from './saronaLogo.JPG';
import React, { useMemo, useState } from "react";
import {GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import Switch from "react-switch";

import './App.css';


const initialView = 'GIS/new/index.html';
const threeDView = '3DGIS/new3d/index3d.html';


function App() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyAKe1T7Jeg9naSanVCnUf29NNFdvFfIo6U",
})

const [view, setView] = useState(initialView)
const [checked, setChecked] = useState(false)

function handleChange(checked) {
  setChecked(checked );
  
  if(checked) {
    setView(threeDView)
  }
  else {
    setView(initialView)
  }

}

  if(!isLoaded) return <div>Loading...</div>;
  return (
    <div className='content-container'>
      <div className='google-map-image-container'>
        <Map />
        <a className='link' href="https://www.saronatlv.co.il/en/">
          <img className='image' src={require("./sarona.jpg")}/>
        </a>
        <img className='contact' src={require("./Contact.JPG")} />
      </div>
      {<iframe className='map' src={view}/>}
      <Switch onChange={handleChange} checked={checked} checkedIcon={false} uncheckedIcon={false}/>
    </div>
  );
}

function Map() {
  const saronaTLV = useMemo(() => ({ lat: 32.072679, lng: 34.787098}), []);
  return (
    <GoogleMap zoom={16} center={saronaTLV} mapContainerClassName="map-container" >
        <MarkerF position={saronaTLV} />
    </GoogleMap>
  )
}

export default App;
