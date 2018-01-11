import React from 'react'
import { Head } from 'react-static'
import styled from 'styled-components'

const AppStyles = styled.div`
iframe {
  background: transparent;
  height: 80vh;
}
`

export default () => (
  <div>
    <Head>
      <title>Contact | Thomas Desfossez, lead front-end</title>
      <meta name="description" content="BipBoop, rencontrez mon chatBot" />
    </Head>

    <AppStyles>
      <iframe title="chatbot" id="landbot-frame" width="100%" frameBorder="0" src="https://landbot.io/u/193651/index.html" />
    </AppStyles>
  </div>
)
