import React from 'react'

function encode (data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export default class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    }).then(() => { window.location.pathname = '/merci' }).catch(error => alert(`Oh non, il y a une erreur: ${error}`))

    e.preventDefault()
  };

  render () {
    return (
      <div className="content">
        <h1>Un mot doux ?</h1>

        <p>
          Une opportunité d'emploi? Passez par <a href="/contact">mon chatBot</a> en premier pour vérifier que mon profil correspond bien à votre poste.
        </p>

        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="merci" onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />

          <div className="field">
            <label htmlFor="name" className="label">Votre nom
              <input required type="text" name="name" id="name" className="input" onChange={this.handleChange} />
            </label>
          </div>

          <div className="field">
            <label htmlFor="email" className="label">Votre courriel
              <input required type="email" name="email" id="email" className="input" onChange={this.handleChange} />
            </label>
          </div>

          <div className="field">
            <label htmlFor="message" className="label">Message
              <textarea required name="message" id="message" className="textarea" onChange={this.handleChange} />
            </label>
          </div>

          <div className="field">
            <button type="submit" className="button">
              Pfiuuuuu&nbsp;&nbsp;&nbsp;
              <span className="icon">
                <i className="fa fa-paper-plane-o" />
              </span>
            </button>
          </div>
        </form>
      </div>
    )
  }
}
