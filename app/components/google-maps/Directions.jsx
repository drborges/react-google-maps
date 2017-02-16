import React from 'react'

const Directions = ({ map, origin, destination, travelMode }) => {
  const directionsService = new google.maps.DirectionsService
  const directionsDisplay = new google.maps.DirectionsRenderer

  directionsDisplay.setMap(map)
  directionsService.route({
    origin: origin,
    destination: destination,
    travelMode: travelMode,
  }, function(response, status) {
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
  travelMode: React.PropTypes.oneOf([
    'DRIVING',
    'BICYCLING',
    'TRANSIT',
    'WALKING',
  ]),
}

Directions.defaultProps = {
  travelMode: 'DRIVING',
}

export default Directions
