import React from 'react'
import Script from '../components/Script'
import GoogleMaps from '../components/google-maps'

const GoogleMapsExample = (props) => (
  <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBccau1--crQs5SSMDYUwAZrmRszOeRiwQ">
    <GoogleMaps.Map
      id="map"
      center={{lat: 41.85, lng: -87.65}}
      onLoad={map => console.log(map)}
      scrollwheel={false}
      zoom={7}
    >
      <GoogleMaps.Directions
        origin="chicago, il"
        destination="oklahoma city, ok"
        travelMode="DRIVING"
      />
    </GoogleMaps.Map>
  </Script>
)

export default GoogleMapsExample
