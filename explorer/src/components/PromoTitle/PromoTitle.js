import React from "react";
import places from "../../assets/places.json";
import styles from "./PromoTitle.module.css";
import Button from "../Button/Button";

const PromoTitle = () => {

    const onExploreClick = () => {
        console.log("Explore button clicked!");
    }

    return (
        <div className={styles.promoContainer}>
            <h5 className={styles.welcomeTitle}>
                WELCOME TO EXPLORER
            </h5>
            <h1 className={styles.quote}>
                Your Adventure <br/> Travel Expert in <br/>the <strong>SOUTH</strong>
            </h1>
            <select className={styles.selectCity} defaultValue={"choose"} name="places" id="places">
                <option value="choose" disabled hidden className={styles.chooseOption}>Choose</option>
                {places.map((place) => <option key={place.city} value={place.city}>{place.city} </option>)}
            </select>
            <Button onButtonClick={onExploreClick} buttonText="EXPLORE"/>
        </div>
    );
}

export default React.memo = PromoTitle;