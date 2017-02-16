import React from 'react'
import ReactDOM from 'react-dom'

class Map extends React.Component {
  state = {}

  static propTypes = {
    onLoad: React.PropTypes.func,
  }

  static defaultProps = {
    onLoad: () => {},
  }

  componentDidMount() {
    const viewport = ReactDOM.findDOMNode(this)
    const map = new google.maps.Map(viewport, {...this.props})

    this.setState({ map })
    this.props.onLoad(map)
  }

  render() {
    const shouldShowChildren = (this.state.map !== undefined && this.props.children !== undefined)
    const children = !shouldShowChildren ? null : this.props.children.map((child, i) =>
      React.cloneElement(child, { map: this.state.map })
    )

    return (
      <section className="google-maps-map">
        {children}
      </section>
    )
  }
}

export default Map
