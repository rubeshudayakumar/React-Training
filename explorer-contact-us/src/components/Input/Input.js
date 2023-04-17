import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = React.forwardRef((props,ref) => {
    return (
        <>
            <label className={styles.label}>{props.label}</label>
            <input className={styles.input} type={props.type} name={props.name} ref={ref}/>
        </>
    );
});

Input.defaultProps = {
    label: "label",
    type: "text",
    name : "name",
}

Input.propType = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    ref: PropTypes.func
}

export default React.memo = Input;