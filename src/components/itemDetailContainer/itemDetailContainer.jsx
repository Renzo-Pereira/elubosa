import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef).then((resp) => {
      setItem({ ...resp.data(), id: resp.id });
    });
  }, [id]);

  return (
    <div>
      {item !== null && (
        <div className="contenedorItemDetail">
          <img src={item.imagenUrl} alt={item.titulo} />
          <div className="itemDetail">
            <h3>{item.titulo}</h3>
            <p>
              Precio: <span className="pesoDetail">$ {item.precio}</span>
            </p>
            <h4>Colores:</h4>
            <p className="precio">{item.colores}</p>
            <h4>Talles:</h4>
              <p className="textoDetail">{item.talles}</p>
              <h3>Descripción</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
