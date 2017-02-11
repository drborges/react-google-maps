import React from 'react'

class GoogleMap extends React.Component {
  componentDidMount() {
    const viewport = document.getElementById('map')
    const map = new google.maps.Map(viewport, {...this.props})
  }

  render() {
    return (
      <div id="map"></div>
    )
  }
}

export default GoogleMap
