import { useSelector } from "react-redux";
import { evalContinuas, evalGenerales } from "../../../api/mainFunctions";
import { chartHeaders } from "../../../constants/headers";
import { chartColors } from "../../../themes/themes";
import LineChart from "./LineChart";

const IndividualChart = ({ index }) => {
  //Seleccionar lo que necesitas de la store
  const { themes } = useSelector((store) => store.theme);
  const courses = useSelector((store) => store.course);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div
        className={`h-full w-9/12 mr-0.5 flex items-center justify-center ${themes.bg_two} rounded-lg`}
      >
        <div>
          <h3 className={`text-center text-lg font-semibold ${themes.font}`}>
            Evaluaciones Generales
          </h3>
          <div className="flex justify-center">
            <LineChart
              labels={chartHeaders[0]}
              values={evalGenerales(courses)[index]}
              colors={chartColors[index]}
            />
          </div>
        </div>
      </div>
      <div
        className={`h-full w-9/12 ml-0.5 flex items-center justify-center ${themes.bg_two} rounded-lg`}
      >
        <div>
          <h3 className={`text-center text-lg font-semibold ${themes.font}`}>
            Evaluaciones Continuas
          </h3>
          <div className="flex justify-center">
            <LineChart
              labels={chartHeaders[1]}
              values={evalContinuas(courses)[index]}
              colors={chartColors[index]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualChart;
