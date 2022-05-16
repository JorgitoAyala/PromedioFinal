import { useDispatch, useSelector } from "react-redux";
import { removeAllIcon } from "../../../assets/svg/icons";
import {
  clearAll,
  clearAllLocalbase,
} from "../../../store/reducers/courseSlice";

const RemoveAll = () => {
  //Seleccionar lo que necesitas de la store
  const { themes } = useSelector((store) => store.theme);

  const dispatch = useDispatch();

  const handleQuitar = () => {
    dispatch(clearAllLocalbase());
    dispatch(clearAll());
  };

  return (
    <button
      className={`py-2 px-5 mr-2 flex justify-center items-center place-content-center ${themes.btn[0]} ${themes.btn[1]} text-lg text-white font-semibold rounded-xl`}
      onClick={handleQuitar}
    >
      <p className={`mr-2`}>Eliminar todo</p>
      <div className={`ml-2`}>{removeAllIcon()}</div>
    </button>
  );
};

export default RemoveAll;
