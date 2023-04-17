import PlacesCard from "../PlacesCard/PlacesCard";
import styles from "./Destinations.module.css";
import React, { useState,useEffect } from "react";

const Destinations = () => {

    const [places,setPlaces] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            const response = await fetch('./assets/data/places.json');
            return await response.json();
        }
        fetchPlaces().then((responseData) => {
            setPlaces(responseData);
        });
    },[]);

    return (
        <>
            <section className={styles.destinationsContainer}>
                <h2>Destinations</h2>
                <h5>Just for You. Because you and your bike are special to us!</h5>
                <div className={styles.placesCardContainer}>
                    {places.map((place) => {
                        return <PlacesCard key={place.city} placeData={place}/>
                    })}
                </div>
            </section>
        </>
    );
}

export default React.memo = Destinations;