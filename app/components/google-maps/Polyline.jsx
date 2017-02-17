import React from 'react'

class Polyline extends React.Component {

  static propTypes = {
    onLoad: React.PropTypes.func,
  }

  static defaultProps = {
    onLoad: () => {},
  }

  componentDidMount() {
    this.props.onLoad(new google.maps.Polyline({
      ...this.props,
    }))
  }

  render() {
    return null
  }
}

export default Polyline
