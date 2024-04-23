import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";

export const Nave = (props) => {

    

	return (
		<div className="card" style={{width: "18rem"}}>
				<img className="card-img-top" src={rigoImage} alt="Card image cap"/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">Nave info.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
		</div>
	);
};
