import React from "react";
import { useSelector } from "react-redux";
import DarkMode from "./DarkMode";
import Time from "./Time";
import logo from "../../assets/img/react-logo.png";

const Header = () => {
  //Seleccionar lo que necesitas de la store
  const { themes } = useSelector((store) => store.theme);

  return (
    <header className="mb-4 flex justify-center items-center">
      <div
        className={`w-3/4 px-5 py-5 mr-2 flex justify-center items-center text-4xl ${themes.bg_two} rounded-2xl shadow-xl`}
      >
        <img
          className="w-1/12 bg-slate-100 rounded-xl"
          src={logo}
          alt="react-logo"
        />
        <h1 className={`ml-5 font-medium ${themes.font}`}>
          Simulador de promedio
        </h1>
      </div>
      <div className="w-1/4 ml-2">
        <Time />
        <DarkMode />
      </div>
    </header>
  );
};

export default Header;
