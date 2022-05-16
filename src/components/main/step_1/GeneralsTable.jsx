import { useDispatch, useSelector } from "react-redux";
import { evalNumber } from "../../../api/validation";
import { removeOneIcon } from "../../../assets/svg/icons";
import { tableHeaders } from "../../../constants/headers";
import {
  clearOne,
  editEf,
  editName,
  editP1,
  editP2,
  editP3,
} from "../../../store/reducers/courseSlice";
import Table from "./Table";

const GeneralsTable = () => {
  //Seleccionar lo que necesitas de la store
  const courses = useSelector((store) => store.course);

  const dispatch = useDispatch();

  return (
    <Table
      header={tableHeaders[0]}
      legend="(EP = Examen Parcial) (EF = Examen Final)"
    >
      {courses.map((el, index) => (
        <tr
          className="border-b-2 border-cyan-500 text-center uppercase font-medium bg-slate-50"
          key={el.id}
        >
          <td className="px-4 py-2 border-r-2 border-cyan-500">{index + 1}</td>
          <td className="px-4 py-2 border-r-2 border-cyan-500 text-left font-semibold">
            <input
              className="w-full px-2 border-b-2 border-black text-center font-medium uppercase bg-slate-50"
              type="text"
              defaultValue={el.nombre}
              inputMode="text"
              placeholder={`Nombre de la asignatura ${index + 1}`}
              onChange={(e) =>
                dispatch(
                  editName({
                    id: el.id,
                    nombre: e.target.value,
                  })
                )
              }
            />
          </td>
          <td className="px-4 py-2 border-r-2 border-cyan-500">
            <input
              className="w-11 border-b-2 border-black text-lg text-center font-medium bg-slate-50"
              type="number"
              defaultValue={el.p1}
              inputMode="numeric"
              min={0}
              max={20}
              autoComplete="off"
              onChange={(e) => {
                dispatch(
                  editP1({
                    id: el.id,
                    p1: evalNumber(e.target.value),
                  })
                );
              }}
            />
          </td>
          <td className="px-4 py-2 border-r-2 border-cyan-500">
            <input
              className="w-11 border-b-2 border-black text-lg text-center font-medium bg-slate-50"
              type="number"
              defaultValue={el.p2}
              inputMode="numeric"
              min={0}
              max={20}
              autoComplete="off"
              onChange={(e) => {
                dispatch(
                  editP2({
                    id: el.id,
                    p2: evalNumber(e.target.value),
                  })
                );
              }}
            />
          </td>
          <td className="px-4 py-2 border-r-2 border-cyan-500">
            <input
              className="w-11 border-b-2 border-black text-lg text-center font-medium bg-slate-50"
              type="number"
              defaultValue={el.p3}
              inputMode="numeric"
              min={0}
              max={20}
              autoComplete="off"
              onChange={(e) => {
                dispatch(
                  editP3({
                    id: el.id,
                    p3: evalNumber(e.target.value),
                  })
                );
              }}
            />
          </td>
          <td className="px-4 py-2 border-r-2 border-cyan-500">
            <input
              className="w-11 border-b-2 border-black text-lg text-center font-medium bg-slate-50"
              type="number"
              defaultValue={el.ef}
              inputMode="numeric"
              min={0}
              max={20}
              autoComplete="off"
              onChange={(e) => {
                dispatch(
                  editEf({
                    id: el.id,
                    ef: evalNumber(e.target.value),
                  })
                );
              }}
            />
          </td>
          <td className="px-4 py-2">
            <button
              className="p-0.5 bg-slate-200 text-black rounded-full"
              onClick={(e) => {
                dispatch(clearOne({ id: el.id }));
              }}
              data-title="Eliminar curso"
            >
              {removeOneIcon()}
            </button>
          </td>
        </tr>
      ))}
    </Table>
  );
};

export default GeneralsTable;
