import React from 'react'
import { Router, NavLink, Link } from 'react-static'
import { getSiteProps } from 'react-static'
import { Head } from 'react-static'
//
import Routes from 'react-static-routes'


export class Navbar extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
	} 
	
	toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <nav className="navbar">
				<div className="container">
					<div className="navbar-brand">
						<NavLink exact to="/" className="navbar-item"  activeClassName="is-active">
							Thomas Desfossez
						</NavLink>

						<span className={this.state.active ? 'navbar-burger burger is-active': 'navbar-burger burger'} onClick={this.toggleClass.bind(this)}>
							<span></span>
							<span></span>
							<span></span>
						</span>
					</div>

					
					<div className={this.state.active ? 'navbar-menu is-active': 'navbar-menu'} >
						<div className="navbar-end">
							<NavLink to="/realisations" className="navbar-item" activeClassName="is-active" onClick={this.toggleClass.bind(this)}>Mes réalisations</NavLink>

							<a rel="noopener" target="_blank" href="https://landbot.io/u/193651/index.html" className="navbar-item" >Une opportunité d'emploi?</a>

							<NavLink to="/blog" className="navbar-item" activeClassName="is-active"  onClick={this.toggleClass.bind(this)}>Blogue</NavLink>

							<span className="navbar-item">
								<a className="button is-info" href="https://ca.linkedin.com/in/tdesfossez/" rel="noopener" target="_blank">
									<span className="icon">
										<i className="fa fa-linkedin"></i>
									</span>
								</a>
							</span>

							<span className="navbar-item">
								<a className="button is-info is-inverted" href="https://github.com/tomagladiator" rel="noopener" target="_blank">
									<span className="icon">
										<i className="fa fa-github"></i>
									</span>

									<span>Github</span>
								</a>
							</span>
						</div>
					</div>
				</div>
			</nav>
        );
	}
};

export default getSiteProps(({ github, linkedin }) =>
  	<Router>
		<div className="global">
			<section className="hero is-primary" >
				<div className="hero-head">
					<Navbar></Navbar>
				</div>
			</section>      

			<main role="main">
				<div className="hero-body">
					<div className="container">
						<Routes />
					</div>
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
							<a target="_blank" rel="noopener" href="https://reactjs.org/" > React.js</a>, &nbsp;
							<a target="_blank" rel="noopener" href="https://github.com/nozzle/react-static" >react-static</a>, &nbsp;
							<a target="_blank" rel="noopener" href="https://yarnpkg.com/fr/" >Yarn</a>, &nbsp;
							<a target="_blank" rel="noopener" href="https://bulma.io/" >Bulma.io</a>,&nbsp;
							<a target="_blank" rel="noopener" href="https://www.contentful.com" >Contentful</a> &amp;&nbsp;
							<a target="_blank" rel="noopener" href="https://app.netlify.com/" >Netlify</a>
						</p>
					</div>
				</div>
			</footer>
		</div>
  	</Router>
)

