import React, { Component } from 'react';
import NavTop from './nav/nav';
import './Layout.scss';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
	<>
		<NavTop />
		<div className="content">
			{this.props.children}
		</div>

	</>
    );
  }
}
