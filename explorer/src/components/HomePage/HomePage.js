import PromoTitle from "../PromoTitle/PromoTitle";
import React from "react";
import PromoExplore from "../PromoExplore/PromoExplore";
import Destinations from "../Destinations/Destinations";

const HomePage = () => {
    return (
        <>
          <PromoExplore url="./assets/images/promo-image.webp" promoTitleComponent={<PromoTitle />} />
          <Destinations />
        </>
    );
}

export default React.memo = HomePage;