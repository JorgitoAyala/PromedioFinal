import { useSelector } from "react-redux";
import AddCourse from "./AddCourse";
import ContinuesTable from "./ContinuesTable";
import GeneralsTable from "./GeneralsTable";
import RemoveAll from "./RemoveAll";

const StepOne = () => {
  //Seleccionar lo que necesitas de la store
  const { themes } = useSelector((store) => store.theme);

  return (
    <section
      className={`px-5 py-5 mb-4 ${themes.bg_two} rounded-2xl shadow-xl`}
    >
      <article className={`text-lg ${themes.font}`}>
        <h2 className={`pb-3 font-semibold text-xl ${themes.subtitles[1]}`}>
          <b className={`mr-3 font-bold text-2xl ${themes.subtitles[0]}`}>
            PASO 1.
          </b>
          <i>Rellena la tabla</i>
        </h2>
        <p className={`pb-2`}>
          Rellena los campos adecuadamente según lo establecido en tu boleta de
          notas.
        </p>
        <p className={`pb-2`}>
          Para incrementar o decrementar los valores, puedes usar las{" "}
          <b>flechas del teclado</b>, <b>usar el mouse</b>, o{" "}
          <b>escribir encima de él</b>.
        </p>
        <p className={`pb-2`}>
          Para usar <b>decimales</b>, escríbelos de derecha a izquierda.
        </p>
        <p>
          <b>No te preocupes!</b> Todos los cambios que realices se guardarán
          aqui hasta otra oportunidad.
        </p>
      </article>

      <div className="mt-10 overflow-x-auto">
        <div className="pb-3 flex items-center justify-between place-content-center">
          <h2 className={`font-semibold text-2xl ${themes.subtitles[0]}`}>
            Tabla de Evaluaciones Generales
          </h2>
          <div className="flex items-center justify-between place-content-center">
            <RemoveAll />
            <AddCourse />
          </div>
        </div>

        <GeneralsTable />
      </div>

      <div className="mt-5 overflow-x-auto">
        <div className="pb-3 flex items-center justify-between place-content-center">
          <h2 className={`font-semibold text-2xl ${themes.subtitles[0]}`}>
            Tabla de Evaluaciones Continuas
          </h2>
        </div>
        <h3 className={`pb-1 text-lg ${themes.font}`}>
          Rellena solo la cantidad de continuas que existen tu curso.
        </h3>
        <h3 className={`pb-3 text-lg ${themes.font}`}>
          Si no has llegado a rendir una continua, debes establecerla con nota
          0.
        </h3>

        <ContinuesTable />
      </div>
    </section>
  );
};

export default StepOne;
