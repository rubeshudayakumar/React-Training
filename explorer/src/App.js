import './App.css';
import DetailPromoTitle from './components/DetailPromoTitle/DetailPromoTitle';
import Header from './components/Header/Header';
import PromoExplore from './components/PromoExplore/PromoExplore';
import PromoTitle from './components/PromoTitle/PromoTitle';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<PromoExplore url="./assets/images/promo-image.webp" promoTitleComponent={<PromoTitle />} />} />
          <Route exact path='/detail' element = {<PromoExplore url="./assets/images/masangudi.png" promoTitleComponent={<DetailPromoTitle />} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
