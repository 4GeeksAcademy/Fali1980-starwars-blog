import React, { useEffect, useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Nave } from "../component/nave";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [starships, setStarships] = useState([])
	useEffect(()=>{
        console.log("se cargo home")
		fetch("https://www.swapi.tech/api/starships")
		.then((response)=> response.json())
		.then((data)=> setStarships(data.results))
    },[])

	return (
		<div className="text-center mt-5">
			{/* <h1 className="text-warning">Naves desde API</h1>
				{starships.map( (item)=> <Nave key={item.uid} title={item.name} />)} */}

			<h1 className="text-warning bg-dark">Naves desde FLUX</h1>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.naves.map( (item)=> <Nave key={item.uid} uid={item.uid} title={item.name} />)}
			</div>
		</div>
	)
};
