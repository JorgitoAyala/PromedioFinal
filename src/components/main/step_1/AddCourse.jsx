import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addCourseIcon } from "../../../assets/svg/icons";
import { addCourse } from "../../../store/reducers/courseSlice";

const AddCourse = () => {
  //Seleccionar lo que necesitas de la store
  const { themes } = useSelector((store) => store.theme);

  const dispatch = useDispatch();

  const handleCurso = () => {
    dispatch(
      addCourse({
        id: uuidv4(),
        nombre: "",
        p1: 0,
        p2: 0,
        p3: 0,
        ef: 0,
        c1: null,
        c2: null,
        c3: null,
        c4: null,
        c5: null,
        c6: null,
        c7: null,
        c8: null,
        c9: null,
        c10: null,
      })
    );
  };

  return (
    <button
      className={`py-2 px-5 ml-2 flex justify-center items-center place-content-center ${themes.btn[0]} ${themes.btn[1]} text-lg text-white font-semibold rounded-xl`}
      onClick={handleCurso}
    >
      <p className={`mr-2`}>Agregar curso</p>
      <div className={`ml-2`}>{addCourseIcon()}</div>
    </button>
  );
};

export default AddCourse;
