import React from 'react';
import { Link } from 'react-router';

const Menu = () => (
	<div>
	<ul>
		<li><Link to={"/type"}>Click Here</Link></li>
	</ul>
	</div>
);

export default Menu;