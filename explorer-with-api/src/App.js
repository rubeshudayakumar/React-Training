import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
