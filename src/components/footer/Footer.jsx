import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  //Seleccionar lo que necesitas de la store
  const { themes } = useSelector((store) => store.theme);

  return (
    <footer className={`px-10 py-7 ${themes.bg_two} rounded-2xl shadow-xl`}>
      <h3
        className={`pb-2 text-center text-lg font-bold ${themes.subtitles[0]}`}
      >
        Simulador de Promedio - Segunda versión (v.2)
      </h3>
      <h3 className={`${themes.font}`}>
        <b>Aplicación realizada por:</b> J.A.
      </h3>
      <h3 className={`${themes.font}`}>
        <b>Supervisada por:</b> J.L.
      </h3>
    </footer>
  );
};

export default Footer;
