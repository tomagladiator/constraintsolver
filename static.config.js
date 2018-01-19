// NODE_TLS_REJECT_UNAUTHORIZED=0

import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  getSiteProps: () => ({
    title: 'Lead Front-end Architect',
    linkedin: 'https://ca.linkedin.com/in/tdesfossez/',
    github: 'https://github.com/tomagladiator',
  }),
  siteRoot: 'https://www.thomas-desfossez.com',
  getRoutes: async () => {
    const API_BASE_URL = 'https://cdn.contentful.com'
    const API_SPACE_ID = 'w5s3ac9iqvx2'
    const API_KEY = '5a819d7a09aff26641f212718f2f7687cf71806be2d88dabc0f0b3e229926552'
    // https://cdn.contentful.com/spaces/w5s3ac9iqvx2/entries?access_token=5a819d7a09aff26641f212718f2f7687cf71806be2d88dabc0f0b3e229926552&content_type=person
    // https://cdn.contentful.com/spaces/w5s3ac9iqvx2/entries?access_token=5a819d7a09aff26641f212718f2f7687cf71806be2d88dabc0f0b3e229926552&content_type=blogPost
    // https://cdn.contentful.com/spaces/w5s3ac9iqvx2/entries?access_token=5a819d7a09aff26641f212718f2f7687cf71806be2d88dabc0f0b3e229926552&content_type=realisation
    const { data: blogPost } = await axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=blogPost&order=-fields.publishDate`)
    const { data: personContent } = await axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=person`)
    const { data: realisationData } = await axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=realisation&order=-fields.year`)
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getProps: () => ({
          personContent,
        }),
      },
      {
        path: '/contact',
        component: 'src/containers/Contact',
      },
      {
        path: '/reachme',
        component: 'src/containers/ReachMe',
      },
      {
        path: '/merci',
        component: 'src/containers/Thanks',
      },
      {
        path: '/realisations',
        component: 'src/containers/Realisations',
        getProps: () => ({
          realisationData,
        }),
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
            blogPost,
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
            <meta name="theme-color" content="#00bb9f" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta charSet="utf-8" />
            <title>Thomas Desfossez, Lead front-end architect</title>
            <meta name="description" content="Développeur web sur Montréal spécialisé en accessibilité et architecture front-end" />
            <meta itemProp="name" content="Thomas Desfossez, Lead front-end architect" />
            <meta itemProp="description" content="Développeur web sur Montréal spécialisé en accessibilité et architecture front-end" />
            <meta itemProp="image" content="https://images.contentful.com/w5s3ac9iqvx2/69GJSDdpjUSeQgaWeSQcAa/7143da3ac245d7c5bc9a29c621ada047/profil.png?h=176&w=256&fit=fill" />
            <meta property="og:url" content="https://www.thomas-desfossez.com" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Thomas Desfossez, Lead front-end architect" />
            <meta property="og:description" content="Développeur web sur Montréal spécialisé en accessibilité et architecture front-end" />
            <meta property="og:image" content="https://images.contentful.com/w5s3ac9iqvx2/69GJSDdpjUSeQgaWeSQcAa/7143da3ac245d7c5bc9a29c621ada047/profil.png?h=176&w=256&fit=fill" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Thomas Desfossez, Lead front-end architect" />
            <meta name="twitter:description" content="Développeur web sur Montréal spécialisé en accessibilité et architecture front-end" />
            <meta name="twitter:image" content="https://images.contentful.com/w5s3ac9iqvx2/69GJSDdpjUSeQgaWeSQcAa/7143da3ac245d7c5bc9a29c621ada047/profil.png?h=176&w=256&fit=fill" />
            <link rel="stylesheet" href="/css/bulma.css" />
            <link rel="manifest" href="/manifest.json" />
            <script async src="js/init-service-workers.js" />
            {styleTags}
          </Head>
          <Body>{newChildren}</Body>
        </Html>
      )
    }
  },
}
