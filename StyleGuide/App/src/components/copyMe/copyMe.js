import React, { useState } from 'react';
import copy from 'clipboard-copy';
import './copyMe.scss';

const CopyMe = ({ ...props }) => {

	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		const stringToCopy = props.string;
		copy(stringToCopy).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	};

	return (
		<div className="copyMe">
			<p className="roboto_s_bold">{props.string}</p>
			<button className="cta cta_dark" onClick={handleCopy}>
				{copied ? "Copied!" : "Copy to Clipboard"}
			</button>
		</div>
		
	);
}

export default CopyMe;