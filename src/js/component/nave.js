import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";

export const Nave = (props) => {

    

	return (
		<div className="card mx-3 mb-2" style={{width: "18rem"}}>
				<img className="card-img-top border border-dark border-4" src="https://cdn.shopify.com/s/files/1/0279/0234/5304/products/kfcwnjk8nplyqgigl9a9.jpg?v=1673425931&width=1946" alt="Card image cap"/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">Nave info. {props.uid}</p>
					<Link className="btn btn-dark border border-warning text-warning" to={"/nave/" + props.uid}>
								<span>Ver nave</span>
							</Link>
				</div>
		</div>
	);
};
