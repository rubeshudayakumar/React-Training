import React from "react";
import styles from "./SelectInput.module.css";
import PropTypes from "prop-types";

const SelectInput = React.forwardRef((props,ref) => {
    return (
        <>
            <label className={styles.label}>{props.label}</label>
            <select defaultValue={"choose"} className={styles.select} ref={ref}>
                <option value="choose" disabled hidden>Choose</option>
                {props.options.map((option) => <option key={option}>{option}</option>)}
            </select>
        </>
    );
});

SelectInput.defaultProps = {
    options: [],
    label: "",
}

SelectInput.propType = {
    options: PropTypes.object,
    label: PropTypes.string
}

export default React.memo = SelectInput;