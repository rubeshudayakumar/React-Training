import React, { useRef,useContext, useEffect,useState } from "react";
import styles from "./ContactUs.module.css";
import Input from "../Input/Input";
import SelectInput from "../Input/SelectInput";
import Button from "../Button/Button";
import { PlaceContext } from "../../App";

const ContactUs = () => {

    const places = useContext(PlaceContext);
    let placesNames = useRef([]);

    const name = useRef("");
    const homeTown = useRef("");
    const likeToGo = useRef("");
    const contactNumber = useRef("");

    const [isValidated,setIsValid] = useState(false);

    useEffect(() => {
        placesNames.current.value = places.map((place) => place.city);
    },[places]);

    const submitInterestHandler = () => {
        if(name.current.value.trim()!=="" && homeTown.current.value.trim()!=="Choose" && likeToGo.current.value.trim()!=="Choose" && contactNumber.current.value.trim()!==""){
            setIsValid(!isValidated);
        }
    }

    return (
        <section className={styles.contactUsContainer}>
            <div className={styles.contactUsSection}>
                <h2 className={styles.contactUsTxt}>Contact Us</h2>
                <h4 className={styles.contactUsTitle}>Our Sales Team will reach out to you ASAP!</h4>
                <Input label="Name" type="text" name="name" ref={name} />
                <SelectInput options={['Chennai','Banglore','Kolkata']} ref={homeTown} label="Your Home Town" />
                <SelectInput options={placesNames.current.value} ref={likeToGo} label="Where would you like to go?" />
                <Input label="Contact Number" type="text" name="contactNumber" ref={contactNumber} />
                <Button onButtonClick={submitInterestHandler} buttonText="submit interest" />
            </div>
            {isValidated && <div className={styles.thankYouMessage}>
                Thank You {name.current.value} for expressing your interest in travelling with us.Our Sales team will get back with 
                the best packages from {homeTown.current.value} to {likeToGo.current.value}
            </div>}
        </section>
    );
}

export default React.memo = ContactUs;