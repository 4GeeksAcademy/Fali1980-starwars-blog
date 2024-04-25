const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			naves: [
				{
					uid: "FIRST",
					name: "white1",
					initial: "white"
				},
				{
					uid: "SECOND",
					name: "white2",
					initial: "white"
				}
			],
			people: [
				{
					uid: "FIRST",
					name: "white1",
					initial: "white"
				},
				{
					uid: "SECOND",
					name: "white2",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				Promise.all([
				  fetch("https://www.swapi.tech/api/starships").then(response => response.json()),
				  fetch("https://www.swapi.tech/api/people").then(response => response.json())
				]).then(([starshipsData, peopleData]) => {
				  setStore({
					naves: starshipsData.results,
					personas: peopleData.results
				  });
				}).catch(error => {
				  console.error('Error al cargar datos:', error);
				});
			  }
			  ,
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
