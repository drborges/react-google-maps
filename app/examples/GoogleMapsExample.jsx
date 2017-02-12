import React from 'react'
import Script from '../components/Script'
import GoogleMap from '../components/GoogleMap'

const GoogleMapsExample = (props) => {
  return (
    <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBccau1--crQs5SSMDYUwAZrmRszOeRiwQ">
      <GoogleMap
        center={{ lat: -24.397, lng: 120.644 }}
        scrollwheel={false}
        zoom={8} />
    </Script>
  )
}

export default GoogleMapsExample
