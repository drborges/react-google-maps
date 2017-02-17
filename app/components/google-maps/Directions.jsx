import React from 'react'

const Directions = (props) => {
  const directionsService = new google.maps.DirectionsService
  const directionsDisplay = new google.maps.DirectionsRenderer({
    ...props,
  })

  directionsDisplay.addListener('directions_changed', () => {
    props.onChange(directionsDisplay.getDirections())
  })

  directionsService.route({
    origin: props.origin,
    waypoints: props.waypoints,
    destination: props.destination,
    travelMode: props.travelMode,
  }, (response, status) => {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });

  return null
}

Directions.propTypes = {
  origin: React.PropTypes.string.isRequired,
  destination: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func,
  travelMode: React.PropTypes.oneOf([
    'DRIVING',
    'BICYCLING',
    'TRANSIT',
    'WALKING',
  ]),
}

Directions.defaultProps = {
  travelMode: 'DRIVING',
  onChange: () => {},
}

export default Directions
