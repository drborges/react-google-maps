import React from 'react'
import Script from '../components/Script'
import GoogleMaps from '../components/google-maps'

const GoogleMapsExample = (props) => (
  <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBccau1--crQs5SSMDYUwAZrmRszOeRiwQ">
    <GoogleMaps.Map
      center={{ lat: -24.397, lng: 120.644 }}
      scrollwheel={false}
      zoom={8}
      onLoad={map => console.log(map)}
    />
  </Script>
)

export default GoogleMapsExample
