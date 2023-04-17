import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useState,useEffect,createContext } from "react";

const PlaceContext = createContext();

function App() {
  const [places,setPlaces] = useState([]) ;
    useEffect(() => {
        const fetchPlaces = async () => {
            const response = await fetch('https://nijin-server.vercel.app/api/explorer');
            return await response.json();
        }
        fetchPlaces().then((responseData) => {
            setPlaces(responseData);
        });
  },[]);

  return (
    <>
      <PlaceContext.Provider value={places}>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage/>} />
            </Routes>
          </BrowserRouter>
          <ContactUs />
      </PlaceContext.Provider>
    </>
  );
}

export default App;

export {
  PlaceContext
};