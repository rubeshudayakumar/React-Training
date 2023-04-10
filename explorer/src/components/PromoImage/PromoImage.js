import React from "react";
import styles from "./PromoImage.module.css";
import PropTypes from "prop-types";

const PromoImage = (props) => {
    return (
        <div className={styles.imageContainer}>
            <img className={styles.image} src={props.url} alt="promo"/>
        </div>
    );
}

PromoImage.defaultProps = {
    url: "",
}

PromoImage.propType = {
    url:  PropTypes.string,
}

export default PromoImage;