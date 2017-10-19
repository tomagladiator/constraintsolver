/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { getRouteProps, Link } from 'react-static'
import { Head } from 'react-static'
//

export default getRouteProps(({ posts }) => ([
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

		<ul>
			{posts.map(post => (
				<li key={post.id}>
					<Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
				</li>
			))}
		</ul>
	</div>
]))
