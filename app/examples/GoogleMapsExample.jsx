import React from 'react'
import Script from '../components/Script'
import GoogleMaps from '../components/google-maps'

const GoogleMapsExample = (props) => {
  const waypoints = [
    { location: "New York, NY", stopover: true },
    { location: "Atlanta, GE",  stopover: true },
  ]

  return (
    <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBccau1--crQs5SSMDYUwAZrmRszOeRiwQ">
      <GoogleMaps.Map
        center={{lat: 41.85, lng: -87.65}}
        onLoad={map => console.log(map)}
        scrollwheel={false}
        zoom={7}
      >
        <GoogleMaps.Directions
          key={0}
          draggable={true}
          origin="denver, co"
          destination="san francisco, ca"
          travelMode="DRIVING"
        />

        <GoogleMaps.Directions
          key={1}
          draggable={true}
          waypoints={waypoints}
          optimizeWaypoints={true}
          origin="chicago, il"
          destination="oklahoma city, ok"
          travelMode="DRIVING"
          onChange={directions => console.log(directions)}
        />
      </GoogleMaps.Map>
    </Script>
  )
}

export default GoogleMapsExample
