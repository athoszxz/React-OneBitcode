import React, {Fragment, useEffect, useState} from "react";
import Planet from "./planet";

async function getPlanets() {
    const response = await fetch("http://localhost:3000/api/planets.json");
    const data = await response.json();
    return data;
}
 
const Planets = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        getPlanets().then((data) => {
            setPlanets(data['planets']);
        });
    }, []);

    const showMessage = () => {
        console.log("Hello from planets");
    };

    const AllPlanets = () => {
        let allPlanets =  planets.map((planet) => 
            <Planet key={planet.id}
                    name={planet.name} 
                    description={planet.description} 
                    img_url={planet.img_url} 
                    link={planet.link}
            />
        )   
        return allPlanets;
    }


    return (
            <Fragment>
                <h2>Planet List</h2>
                <button onClick={showMessage}>Click Me</button>
                <hr/>
                {AllPlanets()}
            </Fragment>
    );
};


export default Planets;
