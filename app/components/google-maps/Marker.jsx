import React from 'react'

class Marker extends React.Component {

  static propTypes = {
    onLoad: React.PropTypes.func,
  }

  static defaultProps = {
    onLoad: () => {},
  }

  componentDidMount() {
    this.props.onLoad(new google.maps.Marker({
      ...this.props,
    }))
  }

  render() {
    return (
      null
    )
  }
}

export default Marker
