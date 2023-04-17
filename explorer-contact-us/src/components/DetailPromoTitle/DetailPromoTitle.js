import React from "react";
import styles from "./DetailPromoTitle.module.css";
import PropTypes from "prop-types";

const DetailPromoTitle = (props) => {
    return (
        <>
            <div className={styles.DetailPromoTitleContainer}>
                <h1 className={styles.placeName}>
                    Masinagudi
                </h1>
                <h2 className={styles.placeQuote}>
                    Never Ending Paddy Fields and <br/>
                    Narrow Roads
                </h2>
                <span className={styles.degreeCelcius}>32&#8451;</span>
            </div>
        </>
    );
}

DetailPromoTitle.defaultProps = {
    component : () => <></>
}

DetailPromoTitle.propTypes = {
    component: PropTypes.func,
}

export default React.memo = DetailPromoTitle;
