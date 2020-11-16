import React from 'react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleUsernameChange(event) {
  //   this.setState({ username: event.target.value })
  // }

  // handlePasswordChange(event) {
  //   this.setState({ password: event.target.value })
  // }

  handleChange(event) {
    console.log(event)
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state.username)
    console.log(this.state.password)
    if (!this.state.username) {
      alert('El nombre de usuario es requerido')
    } else {
      alert(`El usuario ${this.state.username} ha iniciado sesión`)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="usuario" />
        <input name="password" value={this.state.password} onChange={this.handleChange} type="password" placeholder="contraseña" />
        <input type="submit" value="Iniciar sesión" />
      </form>
    )
  }
}

export default LoginForm