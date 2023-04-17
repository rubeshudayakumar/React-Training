import React, { useEffect, useState } from "react";
import styles from "./PromoTitle.module.css";
import Button from "../Button/Button";

const PromoTitle = () => {
    const [places,setPlaces] = useState([]) ;
    useEffect(() => {
        const fetchPlaces = async () => {
            const response = await fetch('https://nijin-server.vercel.app/api/explorer');
            return await response.json();
        }
        fetchPlaces().then((responseData) => {
            setPlaces(responseData);
        });
    },[]);

    const onExploreClick = () => {
        console.log("Explore button clicked!");
    }

    return (
        <div className={styles.promoContainer}>
            <h5 className={styles.welcomeTitle}>
                Welcome to explorer
            </h5>
            <h1 className={styles.quote}>
                Your Adventure <br/> Travel Expert in <br/>the <strong>south</strong>
            </h1>
            <select className={styles.selectCity} defaultValue={"choose"} name="places" id="places">
                <option value="choose" disabled hidden className={styles.chooseOption}>Choose</option>
                {places.map((place) => <option key={place.city} value={place.city}>{place.city} </option>)}
            </select>
            <Button onButtonClick={onExploreClick} buttonText="explore"/>
        </div>
    );
}

export default React.memo = PromoTitle;