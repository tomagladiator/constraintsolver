/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { getRouteProps, Link } from 'react-static'
import { Head } from 'react-static'
//

export default getRouteProps(({ blogPost }) => ([
	
	<Head>
		<title>Blogue | Thomas Desfossez, lead front-end</title>
	</Head>,

	<div className="content">
		<h1>
			It's blog time
		</h1>

		<h2>
			Mes articles
		</h2>

		<ol key="blogList"> 
			{blogPost.items.map((bloggy, index) => (
				<li key={index}>
					<Link key={bloggy.sys.id} to={`/blog/post/${bloggy.fields.slug}/`}>{bloggy.fields.title}</Link>
				</li>
			))}
		</ol>
	</div>
]))
