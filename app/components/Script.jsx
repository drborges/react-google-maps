import React from 'react'
import ReactDOM from 'react-dom'

class Script extends React.Component {
  state = { loaded: false }

  static propTypes = {
    async: React.PropTypes.bool,
    charset: React.PropTypes.string,
    crossorigin: React.PropTypes.string,
    defer: React.PropTypes.bool,
    onLoad: React.PropTypes.func,
    onError: React.PropTypes.func,
    type: React.PropTypes.string,
    src: React.PropTypes.string.isRequired,
  }

  static defaultProps = {
    async: true,
    defer: true,
    charset: "",
    type: "text/javascript",
    onLoad: () => {},
    onError: () => {},
  }

  handleLoad = (e) => {
    this.setState({ loaded: true })
    this.props.onLoad(e)
  }

  handleError = (e) => {
    console.error(e)
    this.props.onError(e)
  }

  componentDidMount() {
    const target = ReactDOM.findDOMNode(this)
    const script = document.createElement("script")
    script.onload = this.handleLoad
    script.onerror = this.handleError
    script.type = this.props.type
    script.async = this.props.async
    script.defer = this.props.defer
    script.charset = this.props.charset
    script.crossorigin = this.props.crossorigin
    script.setAttribute("src", this.props.src)
    target.appendChild(script)
  }

  render() {
    return (
      <section>
        {this.state.loaded ? this.props.children : null}
      </section>
    )
  }
}

export default Script
