import React from 'react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      country: "",
      active: false,
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
    const { checked, name, value, type } = event.target

    this.setState({
      [name]: type === "checkbox" ? checked : value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state.username)
    console.log(this.state.password)
    console.log(this.state.country)
    console.log(this.state.active)

    if (!this.state.username) {
      alert('El nombre de usuario es requerido')
    } else {
      alert(`El usuario ${this.state.username} ha iniciado sesión`)
    }
  }

  render() {
    let options = ["Argentina", "Uruguay", "Chile", "Paraguay"];

    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="usuario" />
        <input name="password" value={this.state.password} onChange={this.handleChange} type="password" placeholder="contraseña" />
        <select name="country" value={this.state.country} onChange={this.handleChange}>
          <option value={""}>Seleccionar</option>
          {
            options.map(country => <option key={country} value={country}>{country}</option>)
          }
        </select>
        <div>
          <input type="checkbox" name="active" value={this.state.active} onChange={this.handleChange} />
          <label>activo</label>
        </div>
        <input type="submit" value="Iniciar sesión" />
      </form>
    )
  }
}

export default LoginForm