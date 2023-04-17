import React from "react"
import styles from "./PlacesCard.module.css";
import Button from "../Button/Button";

const PlacesCard = (props) => {
    return (
        <div className={styles.touristPlaceCard}>
            <img className={styles.touristPlaceImage} src={`assets/images/${props.placeData.city}.png`} alt="This is pollachi" />
            <div className={styles.quoteAboutThePlace}>
                {props.placeData.place}
            </div>
            <div className={styles.placeName}>
                {props.placeData.city}
            </div>
            <div className={styles.placeDescription}>
                {props.placeData.shortDescription}
            </div>
            <Button onButtonClick={() => {}} buttonText="read more" />
        </div>
    );
}



export default React.memo = PlacesCard;