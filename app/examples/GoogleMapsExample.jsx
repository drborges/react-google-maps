import React from 'react'
import Script from '../components/Script'
import GoogleMap from '../components/GoogleMap'

class GoogleMapsExample extends React.Component {
  state = { googleMapsLoaded: false }
  endpoint = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBccau1--crQs5SSMDYUwAZrmRszOeRiwQ"

  handleScriptLoad = () => {
    this.setState({ googleMapsLoaded: true })
  }

  render() {
    const loader = <Script src={this.endpoint} onLoad={this.handleScriptLoad} />
    const maps = !this.state.googleMapsLoaded ? loader : (
      <GoogleMap
        center={{ lat: -24.397, lng: 120.644 }}
        scrollwheel={false}
        zoom={8} />
    )

    return (
      <section className="google-maps-example">
        {maps}
      </section>
    )
  }
}

export default GoogleMapsExample
