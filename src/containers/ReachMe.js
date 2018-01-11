/* eslint-disable react/no-unescaped-entities */
import React from 'react'
//

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    }).then(() => console.log("Success!")).catch(error => alert('Oh non, il y a une erreur: ' + error));

    e.preventDefault();
  };

  render() {
    return (
      <div className="content">
        <h1>Un mot doux ?</h1>

        <p>
          Une opportunité d'emploi? Passez par <a href="/contact">mon chatBot</a> en premier pour vérifier que mon profil correspond bien à votre poste.
        </p>
        
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/merci/" onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />

          <div className="field">
            <label className="label">Votre nom
              <input type="text" name="name" className="input" onChange={this.handleChange} />
            </label>   
          </div> 

          <div className="field">
            <label className="label">Votre courriel
              <input type="email" name="email" className="input" onChange={this.handleChange} />
            </label>
          </div>

          <div className="field">
            <label className="label">Message
              <textarea name="message" className="textarea" onChange={this.handleChange} ></textarea>
            </label>
          </div>

          <div className="field">
            <button type="submit" className="button">
              Pfiuuuuu&nbsp;&nbsp;&nbsp;
              <span className="icon">
                <i className="fa fa-paper-plane-o"></i>
              </span>
            </button>
          </div>
        </form> 
      </div>
    );
  }
}
