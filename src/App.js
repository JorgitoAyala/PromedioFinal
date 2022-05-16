import { useDispatch, useSelector } from "react-redux";
import StepOne from "./components/main/step_1/StepOne";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { getinitialCourses } from "./store/reducers/courseSlice";
import StepTwo from "./components/main/step_2/StepTwo";
import StepThree from "./components/main/step_3/StepThree";

function App() {
  const { themes } = useSelector((store) => store.theme);

  const dispatch = useDispatch();

  /* Funcion asincrona con local base para que persista el estado de la aplicación asi se cierre */
  useEffect(() => {
    dispatch(getinitialCourses());
  });

  return (
    <div
      className={`h-full flex items-center place-content-center ${themes.bg_one}`}
    >
      <div className="min-w-ucss w-ucss mx-10 my-10">
        <Header />

        <main>
          <StepOne />
          <StepTwo />
          <StepThree />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
