import React from 'react'
import { Router, NavLink, getSiteProps } from 'react-static'
import Routes from 'react-static-routes'

export class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  toggleClass () {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }

  render () {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <NavLink exact to="/" className="navbar-item" activeClassName="is-active">
              Thomas Desfossez
            </NavLink>

            <span
              role="button"
              tabIndex="0"
              className={this.state.active ? 'navbar-burger burger is-active' : 'navbar-burger burger'}
              onClick={this.toggleClass.bind(this)}
            >
              <span />
              <span />
              <span />
            </span>
          </div>


          <div className={this.state.active ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-end">
              <NavLink
                to="/realisations"
                className="navbar-item"
                activeClassName="is-active"
                onClick={this.toggleClass.bind(this)}
              >
                Mes réalisations
              </NavLink>

              <NavLink
                to="/blog"
                className="navbar-item"
                activeClassName="is-active"
                onClick={this.toggleClass.bind(this)}
              >
                Blogue
              </NavLink>

              <NavLink
                to="/contact"
                className="navbar-item"
                activeClassName="is-active"
                onClick={this.toggleClass.bind(this)}
              >
                Une opportunité d'emploi?
              </NavLink>

              <NavLink
                to="/reachme"
                className="navbar-item is-no-underlined"
                activeClassName="is-active"
                onClick={this.toggleClass.bind(this)}
              >
                <span className="icon" title="Me contacter">
                  <i className="fa fa-paper-plane-o" />
                </span>
              </NavLink>

              <span className="navbar-item">
                <a className="button is-info" href="https://ca.linkedin.com/in/tdesfossez/" rel="noopener noreferrer" target="_blank">
                  <span className="icon">
                    <i className="fa fa-linkedin" />
                  </span>
                </a>
              </span>

              <span className="navbar-item">
                <a className="button is-info is-inverted" href="https://github.com/tomagladiator" rel="noopener noreferrer" target="_blank">
                  <span className="icon">
                    <i className="fa fa-github" />
                  </span>

                  <span>Github</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default getSiteProps(() => (
  <Router>
    <div className="global">
      <section className="hero is-primary">
        <div className="hero-head">
          <Navbar />
        </div>
      </section>

      <main role="main">
        <div className="hero-body">
          <Routes />
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              constraintsolver&copy;2017
            </p>
          </div>

          <div className="content has-text-centered is-small">
            <p>
              Ce site a été conçu pour être une "Progressive Web App" avec&nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/" title="Repo du site"> Github</a>, &nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/" title="Framework js"> React.js</a>, &nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/nozzle/react-static" title="Generateur de site statique en React">react-static</a>, &nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://bulma.io/" title="Framework css">Bulma.io</a>,&nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://www.contentful.com" title="Gestion du contenu">Contentful</a>, &nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://app.netlify.com/" title="Gestion des déploiement">Netlify</a>, &nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://onesignal.com/" title="Gestion des notifications en Push">Onesignal</a>, &nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://analytics.google.com/analytics/web/" title="Analyse des visites">Google Analytics</a> &amp;&nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://endtest.io/" title="Gestion des tests automatisés">Endtest</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  </Router>
))

