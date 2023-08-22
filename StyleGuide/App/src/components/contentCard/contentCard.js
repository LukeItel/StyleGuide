import React from 'react';
import './contentCard.scss';

const ContentCard = ({ children, ...props }) => {

	return (
		<div className="contentCard">
			{props.title && <h3 className="roboto_xl_bold">{props.title}</h3>}
			<div className="contentCard_content">
				{children}
			</div>
			<div className="contentCard_tags">
				{props.tags && props.tags.map(tag => <a className="contentCard_tags_tag" href={'#' + tag} key={tag}>{tag}</a>)}
			</div>
		</div>
	)
}

export default ContentCard;