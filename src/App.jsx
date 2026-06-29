import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Book from "./pages/Book";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Properties from "./pages/Properties";
import Resort from "./pages/Resort";
import CityHotels from "./pages/CityHotels";
import GuesthouseHotels from "./pages/GuesthouseHotels";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Categories from "./pages/Categories";
import Packages from "./pages/Packages";
import Journal from "./pages/Journal";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="book" element={<Book />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="properties" element={<Properties />} />
          <Route path="resort" element={<Resort />} />
          <Route path="city-hotels" element={<CityHotels />} />
          <Route path="guesthouse-hotels" element={<GuesthouseHotels />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="packages" element={<Packages />} />
          <Route path="journal" element={<Journal />} />
          <Route path="categories">
            <Route path=":category" element={<Categories />} />
            <Route index element={<Categories />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
