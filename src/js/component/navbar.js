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
				<Link to="/demo">
					<div className="dropdown">
						<button className="btn btn-dark text-warning mx-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Dropdown button
						</button>
						<ul className="dropdown-menu dropdown-menu-dark">
							<li><a className="dropdown-item active" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
							<li><hr className="dropdown-divider"/></li>
							<li><a className="dropdown-item" href="#">Separated link</a></li>
						</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
