import React from 'react'
import { getRouteProps, Link, bloggy } from 'react-static'
import { Head } from 'react-static'
var marked = require('marked');
//

export default getRouteProps(({ bloggy }) => (
	<div>
		<Head>
			<title>{bloggy.fields.title} | Thomas Desfossez, lead front-end</title>
		</Head>

		<nav className="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<Link to="/blog/"><span className="icon is-small"><i className="fa fa-angle-left"></i></span> <span>Sommaire</span></Link>
				</li>
			</ul>
		</nav>

		<article className="content">
			<h1>{bloggy.fields.title}</h1>

			<div dangerouslySetInnerHTML={{__html: marked(bloggy.fields.body)}} />
		</article>
	</div>
))