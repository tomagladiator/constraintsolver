/* eslint-disable react/no-unescaped-entities */
import React from 'react'
//

export default () => (
  <div className="content">
    <h1>Un mot doux ?</h1>

    <p>
      Une opportunité d'emploi? Passez par <a href="/contact">mon chatBot</a> en premier pour vérifier que mon profil correspond bien à votre poste.
    </p>
    
    <form name="contact" netlify>
      <div className="field   is-hidden">
        <label>HoneyBot: 
          <input name="bot-field" />
        </label>
      </div>

      <div className="field">
        <label className="label">Votre nom
          <input type="text" name="name" className="input" />
        </label>   
      </div>

      <div className="field">
        <label className="label">Votre courriel
          <input type="email" name="email" className="input" />
        </label>
      </div>

      <div className="field">
        <label className="label">Message
          <textarea name="message" className="textarea"></textarea>
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
)
