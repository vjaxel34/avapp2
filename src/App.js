import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element= {<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />

    </div>
  );
}

export default App;
