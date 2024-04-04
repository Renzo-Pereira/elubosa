import "./App.css";
import NavBar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import Main from "./components/main/main.jsx";
import Nosotros from "./components/nosotros/nosotros.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./components/contacto/contacto.jsx";
import Catalogo from "./components/catalogo/catalogo.jsx";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer.jsx";

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
