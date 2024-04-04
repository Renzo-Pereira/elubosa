import ebrou from "../../assets/ebrou.webp"
import creditel from "../../assets/creditel.webp"
import bbva from "../../assets/bbvanet.webp"
import scotiabank from "../../assets/scotiabank.webp"
import lider from "../../assets/lider.webp"
import master from "../../assets/master.webp"
import santander from "../../assets/santander.webp"
import oca from "../../assets/oca.webp"
import visa from "../../assets/visa.webp"
import hsbc from "../../assets/hsbc.webp"
import dac from "../../assets/dac.webp"


const MainDos = () =>{

    return(
        <div>
<div className="nosotros">
        <h2 id="locales">Conoce Legión!</h2>
        <p>Estamos ubicados en...</p>
        <div className="nosotrosUbicacion">
            <div>
                <h2 className="Sucursales">Sucursal "El Pinar"</h2>
                <p className="SucursalesP">Rambla Costanera esq. Perez Buttler</p>
                <iframe title="Mapa El Pinar" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209455.16645196755!2d-56.21726949633932!3d-34.88795058899947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f8a4660fb17c7%3A0x38b950c14c3d22be!2zTGVnacOzbg!5e0!3m2!1ses-419!2suy!4v1709579587686!5m2!1ses-419!2suy" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
                <h2 className="Sucursales">Sucursal "Barros Blancos"</h2>
                <p className="SucursalesP">Ruta 8 km 26.500 esq. Yaguaron</p>
                <iframe title="Mapa Barros Blancos" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209455.16645196755!2d-56.21726949633932!3d-34.88795058899947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a0272709f866b1%3A0x7eaca25be3acd28e!2sLegi%C3%B3n%20Barros%20Blancos!5e0!3m2!1ses-419!2suy!4v1709579718337!5m2!1ses-419!2suy" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className="nosotrosEnvioPagos">
            <div id="envios" className="nosotrosEnvios">
                <div className="nosotosTitulo">
                    <h2>Envios</h2>
                    <i className="bi bi-truck"></i>
                </div>
                <p>Trabajamos con DAC</p>
                <div className="nosotrosEnviosLogos">
                    <img src={dac} alt="Dac logo"></img>
                </div>
            </div>
            <div id="metodosDePago" className="nosotrosPagos">
                <div className="nosotosTitulo">
                    <h2>Metodos de Pago</h2>
                    <i className="bi bi-cash-coin"></i>
                </div>
                <p>Aceptamos todas las tarjetas de Debito y Credito</p>
                <div className="nosotrosPagosLogos">
                    <img src={creditel} alt="Creditel logo"></img>
                    <img src={bbva} alt="Bbvanet logo"></img>
                    <img src={santander} alt="Santander logo"></img>
                    <img src={ebrou} alt="Ebrou logo"></img>
                    <img src={hsbc} alt="Hsbc logo"></img>
                    <img src={lider} alt="Lider logo"></img>
                    <img src={master} alt="Master logo"></img>
                    <img src={oca} alt="Oca logo"></img>
                    <img src={scotiabank} alt="Scotiabank logo"></img>
                    <img src={visa} alt="Visa logo"></img>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default MainDos;