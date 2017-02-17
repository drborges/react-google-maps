import React from 'react'
import Script from '../components/Script'
import GoogleMaps from '../components/google-maps'

const GoogleMapsExample = (props) => {
  const path = [
    {lat: 36.579, lng: -118.292}, // Mt. Whitney
    {lat: 36.606, lng: -118.0638},// Lone Pine
    {lat: 36.433, lng: -117.951}, // Owens Lake
    {lat: 36.588, lng: -116.943}, // Beatty Junction
    {lat: 36.34,  lng: -117.468},  // Panama Mint Springs
    {lat: 36.24,  lng: -116.832},  // Badwater, Death Valley
  ]

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

        <GoogleMaps.Polyline
          key={2}
          path={path}
          strokeColor="#0000CC"
          strokeOpacity={0.4}
          onLoad={polyline => console.log(polyline)}
        />
      </GoogleMaps.Map>
    </Script>
  )
}

export default GoogleMapsExample
