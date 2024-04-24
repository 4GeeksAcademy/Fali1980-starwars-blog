import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const NaveDetail = props => {
	const { store, actions } = useContext(Context);
    const [starship, setStarship] = useState({})
	const params = useParams();
    useEffect(()=>{
        console.log("se cargo vista nave")
        fetch("https://www.swapi.tech/api/starships/" + params.nave_id)
					.then( (response)=> response.json() )
					.then( (data)=> setStarship(data.result.properties) )
    },[])
	console.log(params)
	return (
		<div className="jumbotron bg-dark text-warning p-4">
			<h1 className="display-4">This Nave: {params.nave_id}</h1>

			<hr className="my-4" />
            <p>Model: {starship.model}</p>
            <p>Model: {starship.manufacturer}</p>
            <p>Model: {starship.name}</p>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

NaveDetail.propTypes = {
	match: PropTypes.object
};
