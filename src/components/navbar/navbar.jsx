import { useEffect } from "react";
import whatsapp from "../../assets/whatsapp.jpg"
import { Link } from "react-router-dom";

const NavBar = () => {

    useEffect(() => {
  const nav = document.querySelector("#nav");
  const abrir = document.querySelector("#abrir");
  const cerrar = document.querySelector("#cerrar");
  const promos = document.querySelector("#promos");

  if (abrir) {
    abrir.addEventListener("click", () => {
      nav.classList.add("visible");
    });
  }

  if (cerrar) {
    cerrar.addEventListener("click", () => {
      nav.classList.remove("visible");
    });
  }

  if (promos) {
    promos.addEventListener("click", () => {
      nav.classList.remove("visible");
    });
  }

})

  return (
    <div>
      <header>
        <h1><Link to="/">legión</Link></h1>
        <button id="abrir" className="abrir-menu">
          <i className="bi bi-list"></i>
        </button>
        <nav className="nav" id="nav">
          <button className="cerrar-menu" id="cerrar">
            <i className="bi bi-x-lg"></i>
          </button>
          <ul className="nav-list">
            <li>
            <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/catalogo">Catalogo</Link>
            </li>
            <li>
              <Link to="/nosotros">Quiénes somos</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>

      <a href="https://wa.me/+59899430254/?text=Hola! Queria hacerles una consulta..." className="botonWhatsapp"><img src={whatsapp} alt="Icono Whatsapp"></img></a>
    </div>
  );
};

export default NavBar;
