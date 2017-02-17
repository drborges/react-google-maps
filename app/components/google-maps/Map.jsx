import React from 'react'
import ReactDOM from 'react-dom'

class Map extends React.Component {
  state = {}

  static propTypes = {
    onLoad: React.PropTypes.func,
  }

  static defaultProps = {
    map: null,
    children: [],
    onLoad: () => {},
  }

  renderChildrenWithMapInstance = () => {
    const children = [].concat.apply([], [this.props.children])
    return children.map((child, i) =>
      React.cloneElement(child, { map: this.state.map })
    )
  }

  componentDidMount() {
    const viewport = ReactDOM.findDOMNode(this)
    const map = new google.maps.Map(viewport, {...this.props})

    this.setState({ map })
    this.props.onLoad(map)
  }

  render() {
    const children = !this.state.map ? null : this.renderChildrenWithMapInstance()

    return (
      <section className="google-maps-map">
        {children}
      </section>
    )
  }
}

export default Map
