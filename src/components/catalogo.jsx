import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const Catalogo = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosRef = collection(db, "productos");

    getDocs(productosRef).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  return (
    <div className="catalogo">
      {productos.map((prod) => (
        <div className="catalogo-cards">
          <img src={prod.imagenUrl} alt={prod.nombre}></img>
          <h2>{prod.titulo}</h2>
          <p>$ {prod.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default Catalogo;
