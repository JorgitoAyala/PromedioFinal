import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import ayuda from "../../../assets/img/ayuda.png";
import { closeModal } from "../../../store/reducers/modalSlice";
import "./Modal.css";

const InfoPrintModal = () => {
  //Seleccionar lo que necesitas de la store
  const { isOpenInfo } = useSelector((store) => store.modal);

  //Para despachar la accion elegida del store
  const dispatch = useDispatch();

  //Evita la propagación adicional del evento actual en las fases de captura y bubbling.
  const handleModalContainerClick = (e) => e.stopPropagation();

  return ReactDOM.createPortal(
    <article
      className={`modal ${isOpenInfo && "is-open"}`}
      onClick={() => dispatch(closeModal("info"))}
    >
      <div
        className="modal-container rounded-2xl"
        onClick={handleModalContainerClick}
      >
        <button
          className="modal-close p-2 rounded-full bg-slate-800 border-2 border-black"
          onClick={() => dispatch(closeModal("info"))}
        >
          ❌
        </button>
        <h3 className="text-2xl font-bold">Ventana de configuración</h3>
        <p className="my-5 px-16 text-center">
          Se puede abrir el apartado de "más opciones de configuración" y
          establecer las opciones como se muestra en la pantalla, asi como si se
          desea guardar en PDF, también se tiene esa opción.
        </p>
        <img src={ayuda} alt="help" />
      </div>
    </article>,
    document.getElementById("modal_ayuda")
  );
};

export default InfoPrintModal;
