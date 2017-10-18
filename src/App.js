import React from 'react'
import { Router, NavLink, Link } from 'react-static'
import { getSiteProps } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { Head } from 'react-static'
//
import Routes from 'react-static-routes'

injectGlobal`
	.footer,
	html {
		background-color: #363636;
	}

	main {
		background-color: #F4F4F6;
		background: linear-gradient(215deg, #C5C5C5, #F4F4F6, #C5C5C5);
	}

	body {
		font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
		font-weight: 300;
		font-size: 16px;
		margin: 0;
		padding: 0;
	}

  	.hero .navbar {
		background: 0 0;
		background-color: #4c4c4c;
	}

	.footer {
		color: #989898;
	}
`

const AppStyles = styled.div`
  
`
/*
*/

export () => (
	<Head>
		<title>Thomas Desfossez - Lead Front-end Architect</title>
	</Head>
)

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
							<NavLink to="/realisations" className="navbar-item" activeClassName="is-active">Mes réalisations</NavLink>

							<a target="_blank" href="https://landbot.io/u/193651/index.html" className="navbar-item" >Une opportunité d'emploi?</a>

							<NavLink to="/blog" className="navbar-item" activeClassName="is-active">Blogue</NavLink>

							<span className="navbar-item">
								<a className="button is-info" href="https://ca.linkedin.com/in/tdesfossez/" target="_blank">
									<span className="icon">
										<i className="fa fa-linkedin"></i>
									</span>
								</a>
							</span>

							<span className="navbar-item">
								<a className="button is-info is-inverted" href="https://github.com/tomagladiator" target="_blank">
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
    <AppStyles>
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
					Ce site a été conçu avec React.js, react-static, Yarn, Bulma.io
				</p>
			</div>
		</div>
	</footer>
    </AppStyles>
  	</Router>
)

