import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeType } from "../../store/reducers/themeSlice";

const DarkMode = () => {
  //Seleccionar lo que necesitas de la store
  const { isDark, themes } = useSelector((store) => store.theme);

  //Para despachar actions
  const dispatch = useDispatch();

  return (
    <div
      className={`p-3 flex items-center justify-center ${themes.bg_two} rounded-2xl shadow-xl`}
    >
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            onChange={() => dispatch(themeType())}
            checked={isDark}
          />
          <div className="bg block bg-black w-14 h-8 rounded-full" />
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition" />
        </div>
        <div className={`ml-3 font-medium ${themes.font}`}>
          {isDark ? "Tema oscuro 🌙" : "Tema claro ☀️"}
        </div>
      </label>
    </div>
  );
};

export default DarkMode;
