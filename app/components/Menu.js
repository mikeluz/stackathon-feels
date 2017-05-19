import React from 'react';
import { Link } from 'react-router';

const style = {color:"white"};

const Menu = () => (
	<div>
	<ul>
		<li><Link to={"/type"}>click here</Link></li>
		<br/>
		<li style={style}>or start typing!</li>
	</ul>
	</div>
);

export default Menu;