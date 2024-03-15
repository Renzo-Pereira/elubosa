import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Main from "./components/main";
import Nosotros from "./components/nosotros";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./components/contacto";
import Catalogo from "./components/catalogo";

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
