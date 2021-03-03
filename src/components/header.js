import React, { Component } from 'react';
import '../css/app.css';

class Header extends Component {
	render() {
		return (
			<div className={'app-header'}>
				<div className={'app-site-info'}>
					<h1 className="name">Dary Barclay</h1>
					<div className="name" className={'site-title'}>
						Professional{' '}
					</div>
					<div className="name" className={'site-title'}>
						File Sharing
					</div>

					<div className={'site-slogan'}>Secure. Safe. Free.</div>
				</div>
			</div>
		);
	}
}

export default Header;
