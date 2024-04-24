import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" className="starLogo navbar-brand mb-0 h1"/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-dark text-warning">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
