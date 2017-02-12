import React from 'react'

class Directions extends React.Component {

  static propTypes = {
    origin: React.PropTypes.string.isRequired,
    destination: React.PropTypes.string.isRequired,
    travelMode: React.PropTypes.oneOf([
      'DRIVING',
      'BICYCLING',
      'TRANSIT',
      'WALKING',
    ]),
  }

  static defaultProps = {
    travelMode: 'DRIVING',
  }

  componentDidMount() {
    const directionsService = new google.maps.DirectionsService
    const directionsDisplay = new google.maps.DirectionsRenderer

    directionsDisplay.setMap(this.props.map)
    directionsService.route({
      origin: this.props.origin,
      destination: this.props.destination,
      travelMode: this.props.travelMode,
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  render() {
    return <section />
  }
}

export default Directions
