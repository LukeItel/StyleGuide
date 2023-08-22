import React from 'react';
import './codeBlock.scss';

function Html(props) {
	return <div className="child-one">{props.children}</div>;
}

function Scss(props) {
	return <div className="child-two">{props.children}</div>;
}

const CodeBlock = ({ children }) => {

	return (
		<div className="codeBlock">
			<Html></Html>
			<Scss></Scss>
		</div>
	)
}

export default CodeBlock;