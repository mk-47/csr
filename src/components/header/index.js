import React from 'react';
import './index.css';

export const Header = (props) => {
    return (
    <div id="header">
		<div>
			<a href="index.html" id="logo"><img src="images/logo.png" alt="logo"/></a>
			<ul>
				<li>
					<a href="index.html">Home</a>
				</li>
				<li class="current">
					<a href="about.html">About</a>
				</li>
				<li>
					<a href="campaigns.html">Campaigns</a>
				</li>
				<li>
					<a href="getinvolved.html">Get Involved</a>
				</li>
				<li>
					<a href="news.html">News &amp; Blog</a>
				</li>
			</ul>
		</div>
	</div>
    )
};

export default Header;
