import React from 'react';
import { Link } from 'react-router';

const Menu = () => (
	<div>
	<ul>
		<li><Link to={"/type"}>Text Input</Link></li>
	</ul>
	</div>
);

export default Menu;