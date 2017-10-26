import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
/*
 [ ] Syntax highlighter
 [ ] page article + detaillé
 [ ] Audit performance
 [ ] Ajout accessibilité sur le site ... !! Mettre l'enphase dessus
*/


export default {
  getSiteProps: () => ({
    title: 'Lead Front-end Architect',
    linkedin: 'https://ca.linkedin.com/in/tdesfossez/',
    github: 'https://github.com/tomagladiator',
  }),
  siteRoot: 'https://www.thomas-desfossez.com',
  getRoutes: async () => {
    const API_BASE_URL = 'https://cdn.contentful.com';
    const API_SPACE_ID = 'w5s3ac9iqvx2';
    const API_KEY = '5a819d7a09aff26641f212718f2f7687cf71806be2d88dabc0f0b3e229926552';
    // https://cdn.contentful.com/spaces/w5s3ac9iqvx2/entries?access_token=5a819d7a09aff26641f212718f2f7687cf71806be2d88dabc0f0b3e229926552&content_type=person
    // https://cdn.contentful.com/spaces/w5s3ac9iqvx2/entries?access_token=5a819d7a09aff26641f212718f2f7687cf71806be2d88dabc0f0b3e229926552&content_type=blogPost
    // https://cdn.contentful.com/spaces/w5s3ac9iqvx2/entries?access_token=5a819d7a09aff26641f212718f2f7687cf71806be2d88dabc0f0b3e229926552&content_type=realisation
    const { data: blogPost } = await axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=blogPost`);
    const { data: personContent }   = await axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=person`);
    const { data: realisationData }   = await axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=realisation`);
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
            <meta name="theme-color" content="#00bb9f"/>
            <link rel="stylesheet" href="/css/bulma.css" />
            <link rel="stylesheet" href="/css/fa.css" />
            <link rel="manifest" href="/manifest.json" />
            {styleTags}
          </Head>
          <Body>{newChildren}</Body>
        </Html>
      )
    }
  }
}
