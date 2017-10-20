import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  getSiteProps: () => ({
    title: 'Lead Front-end Architect',
    linkedin: 'https://ca.linkedin.com/in/tdesfossez/',
    github: 'https://github.com/tomagladiator',
  }),
  siteRoot: 'https://constraintsolver.com',
  getRoutes: async () => {
    const API_BASE_URL = 'https://cdn.contentful.com';
    const API_SPACE_ID = 'w5s3ac9iqvx2';
    const API_KEY = '5a819d7a09aff26641f212718f2f7687cf71806be2d88dabc0f0b3e229926552';
    const { data: blogPost } = await axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=blogPost`);
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/contact',
        component: 'src/containers/Contact',
      },
      {
        path: '/realisations',
        component: 'src/containers/Realisations',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getProps: () => ({
          blogPost,
        }),
        children: blogPost.items.map(bloggy => ({
          path: `/post/${bloggy.fields.slug}`,
          component: 'src/containers/Post',
          getProps: () => ({
            bloggy,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  Html: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children } = this.props

      const sheet = new ServerStyleSheet()
      const newChildren = sheet.collectStyles(children)
      const styleTags = sheet.getStyleElement()

      return (
        <Html>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css" />              
            {styleTags}
          </Head>
          <Body>{newChildren}</Body>
        </Html>
      )
    }
  },
}
