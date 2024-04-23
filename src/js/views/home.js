import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Nave } from "../component/nave";

export const Home = () => {
	const [starships, setStarships] = useState([])
	useEffect(()=>{
        console.log("se cargo home")
		fetch("https://www.swapi.tech/api/starships")
		.then((response)=> response.json())
		.then((data)=> setStarships(data.results))
    },[])

	return (
		<div className="text-center mt-5">
			<h1>Naves desde API</h1>


				{starships.map( (item)=> <Nave key={item.uid} title={item.name} />)}
		</div>
	)
};
