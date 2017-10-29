/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { getRouteProps, Link } from 'react-static'
import { Head } from 'react-static'
var dateFormat = require('dateformat');
var now = new Date();
//

export default getRouteProps(({ blogPost }) => ([
	<Head>
		<title>Blogue | Thomas Desfossez, lead front-end</title>
	</Head>,

	<div className="container">
		<div className="content">
			<h1>
				Mes articles
			</h1>

			<section itemScope itemType="http://schema.org/Blog">
			{blogPost.items.reverse().map((bloggy, index) => (
				<article itemScope itemType="http://schema.org/BlogPosting">
					<div className="columns">
						<div className="column">
							<h2 itemProp="name" key={index}>
								<Link key={bloggy.sys.id} to={`/blog/post/${bloggy.fields.slug}/`}>
									{bloggy.fields.title}
								</Link>
							</h2>
						</div>

						<div className="column is-one-quarter">
							<time dateTime={bloggy.fields.publishDate} itemProp="pubdate" content={bloggy.fields.publishDate}>
								<small className="is-pulled-right">{dateFormat(bloggy.fields.publishDate, "dddd, mmmm dS, yyyy")}</small>
							</time>
						</div>
					</div>

					<p>
						{bloggy.fields.description}
					</p>

					<p>
						<Link key={bloggy.sys.id} to={`/blog/post/${bloggy.fields.slug}/`}>
							Lire l'article...
						</Link>
					</p>

					<hr />
				</article>
			))}
			</section>
		</div>
	</div>
]))
