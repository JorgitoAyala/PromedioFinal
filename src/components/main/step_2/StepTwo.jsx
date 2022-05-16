import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  condicionFinal,
  evalContinuas,
  evalGenerales,
  promContinuas,
  promFinal,
  puntajeContinuas,
  puntajeGenerales,
} from "../../../api/mainFunctions";
import { chartIcon } from "../../../assets/svg/icons";
import { getRandomColor } from "../../../themes/themes";
import IndividualChart from "./IndividualChart";

const StepTwo = () => {
  //Seleccionar lo que necesitas de la store
  const { themes } = useSelector((store) => store.theme);

  //Seleccionar lo que necesitas de la store
  const courses = useSelector((store) => store.course);

  let promedioFinal = promFinal(
    puntajeGenerales(evalGenerales(courses)),
    puntajeContinuas(promContinuas(evalContinuas(courses)))
  );

  let condiFinal = condicionFinal(
    promFinal(
      puntajeGenerales(evalGenerales(courses)),
      puntajeContinuas(promContinuas(evalContinuas(courses)))
    )
  );

  /* Para crear el despliegue de las tablas estadísticas (Mejorable la lógica) */
  const [open, setOpen] = useState(() => {
    let arrayDeFalsos = [];
    courses.forEach(() => {
      arrayDeFalsos.push(false);
    });
    return arrayDeFalsos;
  });
  const desplegar = (index) => {
    open.splice(index, 1, open[index] ? false : true);
    setOpen([...open]);
  };

  return (
    <section
      className={`px-5 py-5 mb-4 ${themes.bg_two} rounded-2xl shadow-xl`}
    >
      <article className={`text-lg ${themes.font}`}>
        <h2 className={`pb-3 font-semibold text-xl ${themes.subtitles[1]}`}>
          <b className={`mr-3 font-bold text-2xl ${themes.subtitles[0]}`}>
            PASO 2.
          </b>
          <i>Obtén los resultados</i>
        </h2>
      </article>

      <div className="transition-all grid grid-cols-2 gap-4">
        {courses.map((el, index) => (
          <div
            className={`transition-all ${
              open[index] ? "col-span-2" : "col-span-1"
            } grid ${open[index] ? "grid-cols-12" : "grid-cols-5"} gap-2 p-3 ${
              themes.bg_four
            } rounded-xl shadow-xl`}
            key={el.id}
          >
            <div
              className={`col-span-5 px-3 py-1 ${
                getRandomColor()[0]
              } rounded-lg shadow-lg`}
            >
              <p className="text-center text-slate-50 font-semibold">
                {`RESULTADO N°${index + 1}`}
              </p>
            </div>

            {open[index] && (
              <div className={`row-span-5 col-span-7 rounded-lg`}>
                <IndividualChart index={index} />
              </div>
            )}

            <div className="col-span-1 px-3 py-1 bg-cyan-500 rounded-lg shadow-lg">
              <p className="text-center text-slate-50 font-semibold">N°</p>
            </div>
            <div className="col-span-3 px-3 py-1 bg-cyan-500 rounded-lg shadow-lg">
              <p className="text-center text-slate-50 font-semibold">
                ASIGNATURA
              </p>
            </div>
            <div className="col-span-1 px-3 py-1 bg-cyan-500 rounded-lg shadow-lg">
              <p className="text-center text-slate-50 font-semibold">PF</p>
            </div>

            <div className="col-span-1 px-3 py-1 bg-slate-100 rounded-lg shadow-lg">
              <div className="h-full flex items-center justify-center">
                <p className="text-center font-semibold">{index + 1}</p>
              </div>
            </div>

            <div className="col-span-3 px-3 py-1 bg-slate-100 rounded-lg shadow-lg">
              <div className="h-full flex items-center justify-left">
                <p className="font-semibold">{el.nombre}</p>
              </div>
            </div>

            <div className="col-span-1 px-3 py-1 bg-slate-100 rounded-lg shadow-lg">
              <div className="h-full flex items-center justify-center">
                <p className="text-center font-semibold">
                  {promedioFinal[index]}
                </p>
              </div>
            </div>

            <div
              className={`col-span-4 px-3 py-1 ${condiFinal[index][1]} rounded-lg shadow-lg`}
            >
              <div className="h-full flex items-center justify-center">
                <p className="font-semibold text-white">
                  {condiFinal[index][0]}
                </p>
              </div>
            </div>

            {/*Botón para desplegar los gráficos*/}
            <div
              className={`row-span-2 col-span-1 ${themes.btn[0]} ${themes.btn[1]} rounded-lg shadow-lg`}
            >
              <div className="h-full flex items-center justify-center">
                <button
                  className={`${themes.btn_font}`}
                  type="button"
                  onClick={() => desplegar(index)}
                >
                  <div className="flex justify-center">{chartIcon()}</div>
                  <p className="text-xs font-medium">Gráficos</p>
                </button>
              </div>
            </div>

            <div className="col-span-4 px-3 py-1 bg-yellow-100 rounded-lg shadow-lg">
              <div className="h-full flex items-center justify-left">
                <p className="font-semibold">
                  <b className="font-bold text-red-500">Leyenda:</b> PF -
                  (Promedio Final)
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepTwo;
