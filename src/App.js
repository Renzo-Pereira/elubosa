import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Main from "./components/main";
import Nosotros from "./components/nosotros";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./components/contacto";
import Catalogo from "./components/catalogo";
import ItemDetailContainer from "./components/itemDetailContainer";

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
