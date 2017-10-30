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
        	<meta name="description" content={bloggy.fields.description} />
		</Head>
		
		<div className="container">
			<div className="columns">
				<div className="column">
					<Link to="/blog/" className="button is-primary is-outlined"><span className="icon is-small"><i className="fa fa-angle-left"></i></span> <span>Sommaire</span></Link>
				</div>
			</div>

			<article itemScope itemType="http://schema.org/BlogPosting">
				<header className="columns content">
					<div className="column is-three-quarters">
						<h1 itemProp="title">{bloggy.fields.title}</h1>
					</div>

					<div className="column">
						<time dateTime={bloggy.fields.publishDate} itemProp="pubdate" content={bloggy.fields.publishDate}>
							<small className="is-pulled-right">{dateFormat(bloggy.fields.publishDate, "dddd, mmmm dS, yyyy")}</small>
						</time>
					</div>
				</header>

				<section itemProp="description" className="content" dangerouslySetInnerHTML={{__html: marked(bloggy.fields.body)}} />

				<footer>
					<div className="columns"> 
						<div className="column is-three-quarters-mobile is-two-thirds-tablet is-one-third-desktop">
							<div className="box">
								<div className="columns   is-flex-align-center"> 
									<div className="column">
										<figure className="image is-48x48">
											<img className="image is-48x48" src={blogPost.includes.Asset[1].fields.file.url + '?w=48'} alt={blogPost.includes.Entry[0].fields.name} />
										</figure>
									</div>
			
									<div className="column is-12">
										<div className="content">
											<strong itemProp="author">{blogPost.includes.Entry[0].fields.name}</strong>&nbsp;
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
		</div>
	</AppStyles>
))