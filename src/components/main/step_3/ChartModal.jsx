import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cursos,
  evalContinuas,
  evalGenerales,
} from "../../../api/mainFunctions";
import { chartHeaders } from "../../../constants/headers";
import { closeModal } from "../../../store/reducers/modalSlice";
import { chartColors, paintChart } from "../../../themes/themes";
import LineChartModal from "./LineChartModal";

const ChartModal = () => {
  //Seleccionar lo que necesitas de la store
  const { themes } = useSelector((store) => store.theme);
  const { isOpenChart } = useSelector((store) => store.modal);
  const courses = useSelector((store) => store.course);

  const nombreCursos = cursos(courses);
  const graficoGenerales = paintChart(evalGenerales(courses), chartColors);
  const graficoContinuas = paintChart(evalContinuas(courses), chartColors);

  //Para despachar la accion elegida del store
  const dispatch = useDispatch();

  //Evita la propagación adicional del evento actual en las fases de captura y bubbling.
  const handleModalContainerClick = (e) => e.stopPropagation();

  return ReactDOM.createPortal(
    <article
      className={`modal ${isOpenChart && "is-open"}`}
      onClick={() => dispatch(closeModal("chart"))}
    >
      <div
        className="modal-container rounded-2xl scroll-auto"
        onClick={handleModalContainerClick}
      >
        <button
          className="modal-close p-2 rounded-full bg-slate-800 border-2 border-black"
          onClick={() => dispatch(closeModal("chart"))}
        >
          ❌
        </button>
        <h3 className="text-2xl font-bold">Gráficos de comparación</h3>
        <p className="my-5 px-16 text-center">
          Aquí se puede visualizar la comparación de las notas generales y
          continuas de cada uno de los cursos que has tenido a lo largo del
          semestre, puedes ver de una manera más concreta, cual fue tu mejor
          puntaje del semestre entre otras características.
        </p>
        <p className="my-5 px-16 text-center">
          Nota: si no lo visualizas bien, aplica el zoom de tu navegador al
          tamaño que prefieras.
        </p>
        <div
          className={`mb-5 border-2 ${themes.btn_border[0]} ${themes.btn_border[1]} p-2 rounded-xl shadow-lg`}
        >
          <h3 className={`text-center text-xl font-semibold ${themes.font}`}>
            Evaluaciones Generales
          </h3>
          <div className="flex justify-center place-content-center">
            <div className="w-7/12 my-3 ml-3 mr-1">
              <LineChartModal
                labels={chartHeaders[0]}
                pinta={graficoGenerales}
              />
            </div>
            <div className="w-5/12 my-3 ml-1 mr-3 py-2 px-2 bg-white rounded-2xl">
              <h2 className="text-lg ml-1">Leyenda</h2>
              {nombreCursos.map((el, index) => (
                <div key={index} className="flex mt-2 ml-2">
                  <div
                    className={`px-1.5 py-0.5 mr-1.5 rounded-full`}
                    style={{ backgroundColor: `${chartColors[index][0]}` }}
                  />
                  <p className="text-xs uppercase">{el}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`border-2 ${themes.btn_border[0]} ${themes.btn_border[1]} p-2 rounded-xl shadow-lg`}
        >
          <h3 className={`text-center text-xl font-semibold ${themes.font}`}>
            Evaluaciones Continuas
          </h3>
          <div className="flex justify-center place-content-center">
            <div className="w-7/12 my-3 ml-3 mr-1">
              <LineChartModal
                labels={chartHeaders[1]}
                pinta={graficoContinuas}
              />
            </div>
            <div className="w-5/12 my-3 ml-1 mr-3 py-2 px-2 bg-white rounded-2xl">
              <h2 className="text-lg ml-1">Leyenda</h2>
              {nombreCursos.map((el, index) => (
                <div key={index} className="flex mt-2 ml-2">
                  <div
                    className={`px-1.5 py-0.5 mr-1.5 rounded-full`}
                    style={{ backgroundColor: `${chartColors[index][0]}` }}
                  />
                  <p className="text-xs uppercase">{el}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>,
    document.getElementById("modal_grafico")
  );
};

export default ChartModal;
