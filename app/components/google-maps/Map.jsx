import React from 'react'

class Map extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
    onLoad: React.PropTypes.func,
  }

  static defaultProps = {
    id: "map",
    onLoad: () => {},
  }

  componentDidMount() {
    const viewport = document.getElementById(this.props.id)
    const map = new google.maps.Map(viewport, {...this.props})
    this.props.onLoad(map)
  }

  render() {
    return (
      <section id={this.props.id}></section>
    )
  }
}

export default Map
