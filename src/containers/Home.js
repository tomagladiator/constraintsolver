import React from 'react'
import { getRouteProps, Head } from 'react-static'
var marked = require('marked');



export default getRouteProps(({ personContent }) =>  ([
    <div className="container">
        <Head>
            <title>{personContent.items[0].fields.name}, {personContent.items[0].fields.title}</title>
            <meta name="description" content="Développeur web sur Montréal spécialisé en accessibilité et architecture front-end" />
        </Head> 

        <div className="content">
            <div className="columns   is-flex-align-center">
                <div className="column   is-narrow">
                    <figure className="image is-128x128 is-object-fit-cover is-round">
                        <img className="image is-128x128" src={personContent.includes.Asset[0].fields.file.url + '?h=128&w=128&fit=fill'} alt={personContent.items[0].fields.name}  />
                    </figure>
                </div>

                <div className="column">
                    <h1 className="title">
                        {personContent.items[0].fields.name}
                    </h1>

                    <p className="subtitle">
                        <i>{personContent.items[0].fields.title}</i>
                    </p>

                    <p>
                        <strong>Poste actuel</strong> : {personContent.items[0].fields.company} <br />
                        <strong>Localité</strong> : {personContent.items[0].fields.villePays}
                    </p>
                </div>
            </div>

            <div dangerouslySetInnerHTML={{__html: marked(personContent.items[0].fields.shortBio)}} />
        </div>
    </div>
])) 
 