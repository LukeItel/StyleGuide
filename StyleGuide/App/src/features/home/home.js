import React from 'react';
import './home.scss';
import ContentCard from '../../components/contentCard/contentCard';
import HalfCard from '../../components/halfCard/halfCard';
import { faScrewdriverWrench, faPalette, faCode, faSitemap } from '@fortawesome/free-solid-svg-icons'
import CodeBlock from '../../components/codeBlock/codeBlock';

const Home = () => {
	return (
		<>
			<ContentCard title="Introduction to the Style Guide">
				<p>The UC Skills Style Guide is designed to be a tool to help keep code and aesthetics consistent and efficient. The guide will become a catalogue of all the UX and UI elements of our website - not just containing code snippets to make our components easily repeatable, but best practices and style references as well.</p>
				<p>The aim will be to build the Style Guide up over time, and for it to be an ever-evolving resource. The Style Guide's main purpose is to allow us to be flexible, and to constantly develop our ideas, while providing a way to easily keep track and communicate these changes to other devs and the wider business.</p>
				<p>Nothing in here is fixed, everything can be improved and reimagined. The guide is not to be thought of as rules, it is more to give us a space to carry out these ideas and improvements while still keeping everyone on the same page. </p>
			</ContentCard>
			<HalfCard title="Structure" icon={faSitemap} link="/structure">
				Structure is mainly about how to layout a page and how it behaves a different sizes. This includes elements such as the media queries and grids used on the site.
			</HalfCard>
			<HalfCard title="UI Components" icon={faScrewdriverWrench} link="/ui-components">
				UI Components are functional elements that allow a user to interact with the site somehow. These can be anything from buttons to accordions. 
			</HalfCard>
			<HalfCard title="Style" icon={faPalette} link="/style">
				Style is how elements and the site look. This section contains infomation such as the colour palette, logos and user feedback.
			</HalfCard>
			<HalfCard title="Miscellaneous" icon={faCode} link="/misc">
				This section is for anything that doesn't fit into the others. This will mainly include topics such as animation and transitions.
			</HalfCard>
			<CodeBlock>

			</CodeBlock>
		</>
	);
}

export default Home;