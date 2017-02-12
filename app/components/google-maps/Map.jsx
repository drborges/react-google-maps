import React from 'react'
import Show from '../Show'

class Map extends React.Component {
  state = {}

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
    this.setState({ map })
  }

  render() {
    return (
      <section id={this.props.id}>
        <Show onlyIf={this.state.map}>
          {React.cloneElement(this.props.children, { map: this.state.map })}
        </Show>
      </section>
    )
  }
}

export default Map
