import React from 'react'

class Script extends React.Component {
  state = { loaded: false }

  static propTypes = {
    async: React.PropTypes.bool,
    charset: React.PropTypes.string,
    crossorigin: React.PropTypes.string,
    defer: React.PropTypes.bool,
    type: React.PropTypes.string,
    onLoad: React.PropTypes.func,
    onError: React.PropTypes.func,
    src: React.PropTypes.string.isRequired,
  }

  static defaultProps = {
    id: "script-target",
    async: true,
    defer: true,
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
    const target = document.getElementById(this.props.id)
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
      <section id={this.props.id}>
        {this.state.loaded ? this.props.children : null}
      </section>
    )
  }
}

export default Script
