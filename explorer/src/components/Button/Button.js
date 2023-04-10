import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = (props) =>{
    return (
        <button className={styles.button} onClick={props.onButtonClick}>{props.buttonText}</button>
    );
}

Button.defaultProps = {
    buttonText : "",
    onButtonClick : () => {}
}

Button.propType = {
    buttonText: PropTypes.string,
    onButtonClick : PropTypes.func,
}

export default React.memo =  Button;