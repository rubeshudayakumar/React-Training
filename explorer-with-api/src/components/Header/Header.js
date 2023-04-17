import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <span>
                <img src='./assets/images/logo.png' alt="logo" />
            </span>
            <ul>
                <li>
                    Hotels
                </li>
                <li>
                    Bike Rentals
                </li>
                <li>
                    Restaurants
                </li>
            </ul>
        </header>  
    );
}

export default React.memo = Header;
