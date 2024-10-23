import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Catagory from "./Components/Catagory/Catagory";
import Singleproduct from "./Components/SingleProduct/SingleProduct";
import AppContext from "./Utils/AppContext";
import NewsTeller from './Components/NewsTeller/NewsTeller'
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="catagory/:id" element={<Catagory/>} />
            <Route path="product/:id" element={<Singleproduct/>} />
          </Routes>
          <NewsTeller />
          <Footer />
        </AppContext>
      </BrowserRouter>
    </>
  );
}

export default App;