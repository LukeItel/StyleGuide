import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './halfCard.scss';

const HalfCard = ({ children, ...props }) => {

	return (
		<>
			{props.link ?
				<Link className="halfCard halfCardWithLink" to={props.link}>			
					<div className="halfCard_content">
						<div className="halfCard_content_text">
							{props.title && <h3>{props.title}</h3>}
							<p>{children}</p>
						</div>
						{ props.imgSrc &&
							<div className="halfCard_content_image">
								<img alt={"Image for " + props.title} src={props.imgSrc}></img>
							</div>
						}
						{ props.icon &&
							<div className="halfCard_content_image">
								<FontAwesomeIcon icon={props.icon} />
							</div>
						}
						
					</div>
					<div className="halfCard_tags">
						{props.tags && props.tags.map(tag => <a className="halfCard_tags_tag" href={'#' + tag} key={tag}>{tag}</a>)}
					</div>
				</Link>
				:
				<div className="halfCard">
					<div className="halfCard_content">
						{props.title && <h3>{props.title}</h3>}
						<div className="halfCard_content_text">
							<p>{children}</p>
						</div>
						<div className="halfCard_content_image">
							<img alt={"Image for " + props.title} src={props.imgSrc}></img>
						</div>
					</div>
					<div className="halfCard_tags">
						{props.tags && props.tags.map(tag => <a className="halfCard_tags_tag" href={'#' + tag} key={tag}>{tag}</a>)}
					</div>
				</div>
			}
		</>
	)
}

export default HalfCard;