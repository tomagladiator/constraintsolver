import React from 'react'
import { getRouteProps, Link, Head } from 'react-static'

const dateFormat = require('dateformat')

export default getRouteProps(({ blogPost }) => ([
  <div className="container">
    <Head>
      <title>Blogue | Thomas Desfossez, lead front-end</title>
      <meta name="description" content="Série de perles du web" />
    </Head>

    <div className="content">
      <h1>
        Mes articles
      </h1>

      <section key="section0" itemScope itemType="http://schema.org/Blog">
        {blogPost.items.map((bloggy, index) => (
          <article key={`article${index}`} itemScope itemType="http://schema.org/BlogPosting">
            <div className="columns">
              <div className="column">
                <h2 itemProp="name">
                  <Link to={`/blog/post/${bloggy.fields.slug}/`}>
                    {bloggy.fields.title}
                  </Link>
                </h2>
              </div>

              <div className="column is-one-quarter">
                <time dateTime={bloggy.fields.publishDate} itemProp="pubdate" content={bloggy.fields.publishDate}>
                  <small className="is-pulled-right">{dateFormat(bloggy.fields.publishDate, 'dddd, mmmm dS, yyyy')}</small>
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
  </div>,
]))
