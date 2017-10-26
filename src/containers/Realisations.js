/* eslint-disable react/no-unescaped-entities */
import axios from 'axios'
import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { getRouteProps, realisationData } from 'react-static'
import { Head } from 'react-static'
var marked = require('marked');
//

const AppStyles = styled.div`
.card {
	display: flex;
    flex-direction: column;
    align-items: center;
	justify-content: flex-start;
	width: 100%;
	margin: 0 0 40px;

	> * {
		width: 100%;
	}
}


@media screen and (min-width: 768px) {
	.card {
		width: calc(50% - 30px);
		margin: 0 15px 40px;
	}
}

.column  {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: stretch;
}

.card {

	.card-image {
		.image {
			overflow: hidden;
		}

		img {
			transition: all 0.4s cubic-bezier(0.3, 1.08, 1, 1);
			opacity: 0.8;
			filter: brightness(0.7) blur(7px) saturate(0);
			transform: scale(1.2);
		}
	}

	&:hover,
	&:focus {
		.card-image {
			img {
				opacity:1;
				filter: brightness(1) blur(0px) saturate(1);
				transform: scale(1);
			}
		}
	}
	
	.image img {
		object-fit: cover;
		height: 300px;
		object-position: top;
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
		max-width: 120px;
		height: auto;
	}

	.agency {
		align-items: center;
	}

	.card-footer {
		margin-top: auto;
	}

	.card-footer-item {
		flex-wrap: wrap;
	}
}
`
export default getRouteProps(({ realisationData }) => (
	<AppStyles>
		<Head>
			<title>Mes réalisations | Thomas Desfossez, lead front-end</title>
		</Head>

		<div className="columns">
			<div className="column">
				{realisationData.items.map((real, index) => (
				<article className="card" key={"idCard"+index}>
					<div className="card-image">
						<figure className="image is-2by3">
							<img src={real.fields.screenshot + '?w=642'} />
						</figure>
					</div>

					<div className="card-content">
						<div className="media">
							<div className="media-left">
								<figure className="image">
									<img src={real.fields.logo + '?w=120'} />
								</figure>
							</div>

							<div className="media-content">
								<p className="title is-3 has-text-right">
									{real.fields.year}	
								</p>
							</div>
						</div>
				
						<div className="content">

							<div className="has-text-grey is-mb-1em is-size-7" dangerouslySetInnerHTML={{__html: marked(real.fields.descriptionDuClient)}} />

							<div className="is-mb-1em" dangerouslySetInnerHTML={{__html: marked(real.fields.descriptionDesResponsabilits)}} />

							<p className="is-size-7">
								<span className="icon">
									<i className="fa fa-home"></i>
								</span>

								{real.fields.agency}&nbsp;

								<span className="icon">
									<i className="fa fa-briefcase"></i>
								</span>

								{real.fields.jobTitle}	
							</p>
						</div>
					</div>

					<footer className="card-footer">
						<span className="card-footer-item hashtag is-size-7">
							{real.fields.hashtag.map((hashTag, index) => (
								<span  key={"idHashtag"+index}>
									#{hashTag}&nbsp;
								</span>
							))}
						</span>
					</footer>
				</article>
				))}
			</div>
		</div>
	</AppStyles>
))
