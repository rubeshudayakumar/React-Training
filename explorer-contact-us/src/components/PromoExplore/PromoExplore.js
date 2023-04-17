import PromoImage from "../PromoImage/PromoImage";
import styles from "./PromoExplore.module.css";
import React from "react";
import PropTypes from "prop-types";

const PromoExplore = (props) => {
    return (
        <section className={styles.exploreContainer}>
            {props.promoTitleComponent}
            <PromoImage url={props.url}/>
        </section>
    );
}

PromoExplore.defaultProps = {
    component: () => {},
}

PromoExplore.propType = {
    component: PropTypes.func,
}

export default React.memo = PromoExplore;