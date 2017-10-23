import React from 'react'
import { getRouteProps, Link, bloggy } from 'react-static'
import { Head } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
var dateFormat = require('dateformat');
var marked = require('marked');
var now = new Date();

const AppStyles = styled.div`
img.image { object-fit: cover; border-radius: 1000px; }
`

export default getRouteProps(({ bloggy, blogPost }) => (
	<AppStyles>
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

		<article>
			<header className="columns content">
				<div className="column is-three-quarters">
					<h1>{bloggy.fields.title}</h1>
				</div>

				<div className="column">
					<small className="is-pulled-right">{dateFormat(bloggy.sys.createdAt, "dddd, mmmm dS, yyyy")}</small>
				</div>
			</header>

			

			<div className="content" dangerouslySetInnerHTML={{__html: marked(bloggy.fields.body)}} />



			<footer>
				<div className="columns"> 
					<div className="column is-one-third">
						<div className="box">
							<div className="columns   is-flex-align-center"> 
								<div className="column">
									<figure className="image is-48x48">
										<img className="image is-48x48" src={blogPost.includes.Asset[1].fields.file.url} alt={blogPost.includes.Entry[0].fields.name} />
									</figure>
								</div>

		
								<div className="column is-12">
									<div className="content">
										<strong>{blogPost.includes.Entry[0].fields.name}</strong>&nbsp;
										<br /> 
										<small>{blogPost.includes.Entry[0].fields.title}</small>&nbsp;
									</div> 
								</div>
							</div>
						</div>
					</div>

					<div className="column">

					</div>
				</div>
			</footer>
		</article>
	</AppStyles>
))