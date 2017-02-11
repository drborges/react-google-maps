import React from 'react'

class Script extends React.Component {

  static defaultProps = {
    id: "script-target",
    async: true,
    defer: true,
    type: "text/javascript",
  }

  componentDidMount() {
    const target = document.getElementById(this.props.id)
    const script = document.createElement("script")
    script.onload = this.props.onLoad
    script.onerror = this.props.onError
    script.type = this.props.type
    script.async = this.props.async
    script.defer = this.props.defer
    script.setAttribute("src", this.props.src)
    target.appendChild(script)
  }

  render() {
    return (
      <section id={this.props.id}></section>
    )
  }
}

export default Script
