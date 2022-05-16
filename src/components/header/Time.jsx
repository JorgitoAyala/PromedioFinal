import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Time = () => {
  //Seleccionar lo que necesitas de la store
  const { themes } = useSelector((store) => store.theme);

  const [clock, setClock] = useState();

  const fechaDeHoy = () => {
    let fecha = new Date();
    const diaSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const mes = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    return `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${
      mes[fecha.getMonth()]
    } del ${fecha.getFullYear()}`;
  };

  const horaTiempoReal = () => {
    let hora = new Date();
    return `${hora.toLocaleTimeString()} ${hora.getHours() < 12 ? "AM" : "PM"}`;
  };

  useEffect(() => {
    setClock(horaTiempoReal());
    setInterval(() => {
      setClock(horaTiempoReal());
    }, 1000);
  }, []);

  return (
    <fieldset
      className={`p-2 mb-3 border-2 ${themes.border} rounded-2xl ${themes.font} shadow-xl`}
    >
      <legend className="ml-1 px-1 text-xs font-medium">{fechaDeHoy()}</legend>
      <h2 className="text-3xl text-center font-bold">{clock}</h2>
    </fieldset>
  );
};

export default Time;
