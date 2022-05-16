import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../store/reducers/modalSlice";
import ChartModal from "./ChartModal";
import InfoPrintModal from "./InfoPrintModal";

const StepThree = () => {
  //Seleccionar lo que necesitas de la store
  const { themes } = useSelector((store) => store.theme);

  //Para despachar la accion elegida del store
  const dispatch = useDispatch();

  return (
    <section
      className={`px-5 py-5 mb-4 ${themes.bg_two} rounded-2xl shadow-xl`}
    >
      <article className={`text-lg ${themes.font}`}>
        <h2 className={`pb-3 font-semibold text-xl ${themes.subtitles[1]}`}>
          <b className={`mr-3 font-bold text-2xl ${themes.subtitles[0]}`}>
            PASO 3.
          </b>
          <i>Selecciona entre otras opciones</i>
        </h2>
      </article>

      <div className="grid grid-cols-2 gap-3">
        <div className="row-span-2 col-span-1 flex justify-center items-center">
          <div
            className={`h-full px-5 py-5 ${themes.bg_two} border-2 ${themes.border} rounded-2xl shadow-2xl`}
          >
            <h2 className="mb-3 font-semibold text-xl text-center">
              <b
                className={`mr-3 font-bold text-2xl ${themes.subtitles[0]} underline`}
              >
                Más opciones
              </b>
            </h2>
            <p className={`mb-3 text-center ${themes.font}`}>
              Si deseas usar estas herramientas, selecciona entre estas opciones
              ⬇️
            </p>
            <hr className={`mb-3 border-2 ${themes.btn_border[0]}`} />
            <p className={`pb-3 ${themes.font}`}>
              Se puede obtener el <b>reporte del simulador</b> presionando el
              botón <b>"Imprimir"</b> o exportarlo a <b>PDF</b>. Para que salga
              perfecta la conversión puede seguir las indicaciones en el botón{" "}
              <b>"Ayuda (❔)"</b>.
            </p>
            <div className="flex justify-center place-content-center">
              <button
                className={`py-2 px-5 ${themes.btn[0]} ${themes.btn[1]} text-lg text-white font-semibold rounded-xl`}
                type="button"
                onClick={() => window.print()}
              >
                🖨️ Imprimir
              </button>
              <button
                className={`py-2 px-5 ml-2 border-4 ${themes.btn_border[0]} ${themes.btn_border[1]} text-white rounded-xl`}
                type="button"
                onClick={() => dispatch(openModal("info"))}
              >
                ❔
              </button>
              <InfoPrintModal />
            </div>
          </div>
        </div>
        <div
          className={`col-span-1 h-full px-5 py-3 ${themes.bg_two} border-2 ${themes.border} rounded-2xl shadow-2xl`}
        >
          <h3 className={`mb-3 text-center ${themes.font}`}>
            <b>Obtén la gráfica general de todos tus cursos</b>
          </h3>
          <div className="flex justify-center">
            <button
              className={`py-2 px-5 ${themes.btn[0]} ${themes.btn[1]} text-lg text-white text-center font-semibold rounded-xl`}
              type="button"
              onClick={() => dispatch(openModal("chart"))}
            >
              📈 Gráfica General
            </button>
            <ChartModal />
          </div>
        </div>
        <div
          className={`col-span-1 h-full px-10 py-5 ${themes.font} ${themes.bg_two} border-2 ${themes.border} rounded-2xl shadow-2xl`}
        >
          <h3 className={`mb-2 text-center`}>
            <p>
              <b>Más características en desarrollo.</b>
            </p>
            <p>
              <b>(Próximamente v.3)</b>
            </p>
          </h3>
          <ul className="list-disc">
            <li>Implementación desde otra plataforma.</li>
            <li>Predicción de "posibles notas" a lo largo del semestre.</li>
            <li>Diseño responsive para diferentes entornos.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StepThree;
