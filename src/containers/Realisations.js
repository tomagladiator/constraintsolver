/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Head } from 'react-static'
//

const AppStyles = styled.div`

.tile {
	align-items: flex-start;
}

.card {
	.image img {
		object-fit: cover;
		height: 300px;
		object-position: top;
		background-color: #4c4c4c;
	}

	.hashtag {
		color: rgba(54, 54, 54, 0.5);
		word-spacing: 10px;
	}

	.media {
		align-items: center;
	}

	.media-left img {
		object-fit: contain;
		max-height: 40px;
		width: auto;
	}

	.agency {
		align-items: center;
	}
}
`

export class Realisation extends React.Component {
	render() {
        return (
			<article className="tile is-child">
				<div className="card">
					<div className="card-image">
						<figure className="image is-2by3">
							<img src={this.props.srcImage} alt={this.props.altImage} />
						</figure>
					</div>

					<div className="card-content">
						<div className="media">
							<div className="media-left">
								<figure className="image">
									<img src={this.props.srcImageThb} alt={this.props.altImageThb} />
								</figure>
							</div>

							<div className="media-content">
								<p className="title is-3 has-text-right">{this.props.year}</p>
							</div>
						</div>
				
						<div className="content">
							<p className="has-text-grey">
								<i>
									{this.props.client}									
								</i>
							</p>

							{this.props.content}	

							<hr />

							<div className="is-size-7">
								<span className="icon">
									<i className="fa fa-home"></i>
								</span>

								{this.props.agency}
							</div>
						</div>
					</div>

					<footer className="card-footer">
						<span className="card-footer-item hashtag is-size-7">{this.props.hashtag}</span>
					</footer>
				</div>
			</article>
		);
	}
};

export default () => (
<AppStyles>
	<Head>
      <title>Mes réalisations | Thomas Desfossez, lead front-end</title>
    </Head>

	<div className="tile">
		<div className="tile is-parent is-vertical">
			<Realisation 
				srcImage="img/wsp.jpg"
				altImage="WSP"
				srcImageThb="img/logo-wsp-thb.png"
				altImageThb="Logo WSP"
				year="2017"
				client="WSP Global inc., est une entreprise Canadienne de génie-conseil comptant 36 000 employés"
				content={[	
					<div>
						<p>
							Ma mission consistait à l'intégration des maquettes dans un CMS Sitecore.
						</p>
					</div>
				]}
				hashtag="#Responsive #Sitecore #Agile"
				agency="Pour l'Agence Nexio en tant que Lead front-end"
				>
			</Realisation> 

			<Realisation 
				srcImage="img/tink.jpg"
				altImage="Tink"
				srcImageThb="img/logo-tink-thb.png"
				altImageThb="Logo Tink"
				year="2015"
				client="Tink est une agence de communications marketing et de solutions numériques aui figure au palmarès des 500 plus grandes sociétés au Québec."
				content={[	
					<div>
						<p>
							Ma mission consistait à l'intégration des maquettes dans un CMS Drupal ainsi qu'à l'ajout d'animations.
						</p>
					</div>
				]}
				hashtag="#Responsive #Drupal"
				agency="Pour l'Agence Tink en tant que Lead technique front-end"
				>
			</Realisation> 

			<Realisation 
				srcImage="img/metro.jpg"
				altImage="Metro Epicerie"
				srcImageThb="img/logo-metro-thb.png"
				altImageThb="Metro Epicerie"
				year="2014"
				client="Metro inc. est une entreprise québécoise de distribution alimentaire et pharmaceutique au Canada. En 2013, son chiffre d'affaires était de 11,4&nbsp;milliards de dollars cad et elle employait 65 000 employés."
				content={[	
					<div>
						<p>
							Pour ce client ma mission consistait à refondre le site corporatif.
						</p>

						<p>
							Ce site responsive utilise la parallax pour un effet de profondeur.
						</p>

						<p>
							<a href='http://corpo.metro.ca/fr/accueil.html' rel="noopener" target="_blank">Metro Corpo</a>
						</p>
					</div>
				]}
				hashtag="#Responsive #Parallax #PrixBoomerang #Agile"
				agency="Pour l'Agence Tink en tant que consultant front-end"
				>
			</Realisation> 

			<Realisation 
				srcImage="img/dyscatalog.jpg"
				altImage="Dyscatalog"
				srcImageThb="img/logo-dyscatalog-thb.png"
				altImageThb="Logo Dyscatalog"
				year="2016"
				client="Il s'agit d'un projet personnel développé en collaboration avec ma conjointe orthophoniste."
				content={[	
					<div>
						<p>
							Je souhaitais un projet libre afin de mettre en pratique mes dernières recherches sur AngularJS, NodeJS, Bower, Gulp, Yeoman et le Material Design de Google.
						</p>

						<p>
							En 2016 j'ai changé le framework de ce site en passant de Angular a Vue.js
						</p>

						<p>
							<a href='https://www.constraintsolver.com/dyscatalog/' rel="noopener" target="_blank">Dyscatalog</a>
						</p>
					</div>
				]}
				hashtag="#Responsive #Angular #Vue"
				agency="Pour ma conjointe en tant que conjoint"
				>
			</Realisation> 

			<Realisation 
				srcImage="img/amt.jpg"
				altImage="AMT"
				srcImageThb="img/logo-amt-thb.png"
				altImageThb="Logo AMT"
				year="2014"
				client="L'AMT est une agence gouvernementale, rattachée au ministère des Transports du Québec, elle coordonne l'ensemble du réseau des transports de la région montréalaise. (Train, Métro, Autobus)."
				content={[	
					<div>
						<p>
							Pour ce client ma mission consistait à l'intégration des maquettes ainsi qu'à la division des tâches pour l'ensemble de l'équipe frontend.
						</p>

						<p>
							Un suivi sur l'avancement du frontend était également de ma responsabilité.
						</p>

						<p>
							Une formation en accessibilité et des défis techniques de taille pour ce site.
						</p>
					</div>
				]}
				hashtag="#Responsive #Orchard #Accessible #PrixBoomerang #Agile"
				agency="Pour l'Agence Tink en tant que développeur front-end"
				>
			</Realisation>  

			<Realisation 
				srcImage="img/mavic.jpg"
				altImage="Mavic"
				srcImageThb="img/logo-mavic-thb.png"
				altImageThb="Mavic"
				year="2013"
				client="Mavic est un équipementier de l'industrie du cycle. Propriété de Amer Sports Oyj, numéro un mondial du matériel de sport hors textile et chaussures avec un chiffre d'affaires de 1,7 milliard d'euros."
				content={[	
					<div>
						<p>
							Pour ce client ma mission consistait à l élaboration des wireframes en collaboration étroite avec le client ainsi qu'au suivi du travail du directeur artistique.
						</p>
					</div>
				]}
				hashtag="#Responsive  #wireframe"
				agency="Pour l'Agence Altimax en tant que chargé de projet"
				>
			</Realisation>  
		</div>


	
		<div className="tile is-parent is-vertical">
	
			<Realisation 
				srcImage="img/metro-epicerie.jpg"
				altImage="Metro epicerie"
				srcImageThb="img/logo-metro-thb.png"
				altImageThb="Logo Metro epicerie"
				year="2016"
				client="Metro inc. est une entreprise québécoise de distribution alimentaire et pharmaceutique au Canada. En 2013, son chiffre d'affaires était de 11,4&nbsp;milliards de dollars cad et elle employait 65 000 employés."
				content={[	
					<div>
						<p>
							Ma mission consistait à l'intégration des maquettes dans un environnement JAVA.
						</p>

						<p>
							Évaluer les récits et déléguer les tâches
						</p>
					</div>
				]}
				hashtag="#Responsive #Sitecore #CMS #java #Agile"
				agency="Pour l'Agence Nexio en tant que Lead technique front-end"
				>
			</Realisation> 
	
			<Realisation 
				srcImage="img/monetico.jpg"
				altImage="Monetico"
				srcImageThb="img/logo-desjardins-thb.png"
				altImageThb="Desjardins"
				year="2015"
				client="En 2014, le Mouvement Desjardins compte 6 millions de membres dont 400 000 entreprises, plus de 5000 dirigeants élus et 45 000 employés, qui gèrent un actif de 210 milliards de dollars canadiens."
				content={[	
					<div>
						<p>
							Réalisation de quatre projets pour ce client:
						</p>

						<p>
							<a href="https://produits.desjardinsassurancesgenerales.com/home" rel="noopener" target="_blank">Desjardins Assurances Generales</a> (2015)
						</p>

						<p>
							<a href="https://www.disnat.com/" rel="noopener" target="_blank">Desjardins Courtage en ligne</a> (2015)
						</p>

						<p>
							<a href="http://www.monetico.ca/" rel="noopener" target="_blank">Desjardins Monetico</a> (prix Boomerang 2014)
						</p>

						<p>
							<a href="https://www.disnat.com/experience/investisseur-en-ligne-nicolas.html#page-01" rel="noopener" target="_blank">Desjardins Courtage en ligne</a>
						</p>
					</div>
				]}
				hashtag="#Responsive #Parallax #PrixBoomerang #Accessibilité #Agile"
				agency="Pour l'Agence Tink en tant que Lead technique front-end"
				>
			</Realisation> 

			<Realisation 
				srcImage="img/poule-position.jpg"
				altImage="Poule Position"
				srcImageThb="img/logo-st-hubert-thb.png"
				altImageThb="St-Hubert"
				year="2014"
				client="Reconnu pour son fameux poulet rôti à la broche, ses côtes levées et ses produits en épicerie, St-Hubert compte 115 restaurants situés au Québec, en Ontario et au Nouveau-Brunswick."
				content={[	
					<div>
						<p>
							Pour ce client ma mission consistait à l'intégration du jeu web de la machine à gagner des prix.
						</p>

						<p>
							Les animations sont faites en CSS3 et en javascript.
						</p>
					</div>
				]}
				hashtag="#ios #android #PrixBoomerang #Agile"
				agency="Pour l'Agence Tink en tant que développeur front-end"
				>
			</Realisation> 

			<Realisation 
				srcImage="img/somfy.jpg"
				altImage="Somfy"
				srcImageThb="img/logo-somfy-thb.png"
				altImageThb="Somfy"
				year="2013"
				client="Somfy est le #1 de la domotique en France, présent dans plus de 60 pays avec 7600 employés et ayant un chiffre d'affaires de près d' un milliard d'euros."
				content={[	
					<div>
						<p>
							Pour ce client ma mission consistait à l'étude de la stratégie de la marque, à l'élaboration des wireframes ainsi qu'à la délégation du travail au sein des employés (designer, développeurs).
						</p>
					</div>
				]}
				hashtag="#Responsive #wireframe"
				agency="Pour l'Agence Altimax en tant que chargé de projet"
				>
			</Realisation>  

			<Realisation 
				srcImage="img/plagne.jpg"
				altImage="Plagne Access"
				srcImageThb="img/logo-plagne.png"
				altImageThb="La Plagne"
				year="2013"
				client="La Plagne est une station de sports d'hiver de la vallée de la Tarentaise, dans le département de la Savoie en région Rhône-Alpes. Aujourd'hui, la station compte onze stations-villages."
				content={[	
					<div>
						<p>
							Pour ce client ma mission consistait à la relation client et à la délégation du travail au sein des employés (designer, développeurs).
						</p>
					</div>
				]}
				hashtag="#iOs #Application #Ski"
				agency="Pour l'Agence Altimax en tant que chargé de projet"
				>
			</Realisation> 
		</div>
	</div>
</AppStyles>
)
