import React from 'react'
import { getSiteProps } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
//


const AppStyles = styled.div`
.a {
    text-align: center;
    padding: 1rem;

    .b {
        cursor: pointer;
        box-shadow: 0px 0px 35px -12px rgba(0, 0, 0, 0.65);
        border-radius: 140px;
        height: 140px;
        filter: brightness(1.1) contrast(110%);
        margin-bottom: 20px;
    }
}
`

export default getSiteProps(({ title, linkedin }) => 

    <AppStyles>
    <div className="content is-medium">
        <img src="/img/thomas-desfossez.png" alt="Thomas Desfossez" className="b" />

        <h1 className="title">
            Thomas Desfossez
        </h1>

        <p className="subtitle">
            <i>{title}</i>
        </p>

        <p>
            Entre le Canada et l'Europe, j'ai développé une expérience professionelle dans les domaines du <strong>développement web</strong>, de la <strong>gestion de projet</strong> et de l'<strong>architecture frontend</strong>.
        </p>

        <p>
            Je reste à l'affût des nouvelles pratiques et technologies dans le domaine du web.
        </p>

        <p>
            J'applique mes connaissances en accessibilité, en gestion, en développement et en design sur l'ensemble de mes projets.
        </p>

        <h2>Compétences
            Profil
        </h2>

        <p>
            <a href="/temp/resume.pdf">Tout est dans mon CV</a> (octobre 2016...)
        </p>

        <p>
            Hey pssiii... mon <a href={linkedin} target="_blank">Linkedin</a> est encore plus à jour!
        </p>
    </div>
    </AppStyles>

)
 