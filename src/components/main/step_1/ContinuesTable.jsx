import { useDispatch, useSelector } from "react-redux";
import { evalContinuas, promContinuas } from "../../../api/mainFunctions";
import { evalNumber } from "../../../api/validation";
import { tableHeaders } from "../../../constants/headers";
import {
  editC1,
  editC10,
  editC2,
  editC3,
  editC4,
  editC5,
  editC6,
  editC7,
  editC8,
  editC9,
} from "../../../store/reducers/courseSlice";
import Table from "./Table";

const ContinuesTable = () => {
  //Seleccionar lo que necesitas de la store
  const courses = useSelector((store) => store.course);

  const dispatch = useDispatch();

  //Info requerida
  const eContinuas = evalContinuas(courses);
  const pContinuas = promContinuas(eContinuas);

  /*Continuas*/
  /*
  console.log("evalContinuas", evalContinuas(array));
  console.log("promContinuas", promContinuas(evalContinuas(array)));
  console.log(
    "puntajeContinuas",
    puntajeContinuas(promContinuas(evalContinuas(array)))
  );
  */

  return (
    <Table
      header={tableHeaders[1]}
      legend="(EP = Examen Parcial) (EF = Examen Final)"
    >
      {courses.map((el, index) => (
        <tr
          className="border-b-2 border-cyan-500 text-center uppercase font-medium bg-slate-50"
          key={el.id}
        >
          <td className="px-4 py-2 border-r-2 border-cyan-500">{index + 1}</td>
          <td className="px-4 py-2 border-r-2 border-cyan-500 text-left font-semibold">
            {el.nombre}
          </td>
          <td className="px-2 py-2 border-r-2 border-cyan-500">
            <input
              className="w-11 border-b-2 border-black text-lg text-center font-medium bg-slate-50"
              type="number"
              defaultValue={`${el.c1}`}
              inputMode="numeric"
              min={0}
              max={20}
              autoComplete="off"
              onChange={(e) => {
                dispatch(
                  editC1({
                    id: el.id,
                    c1: evalNumber(e.target.value),
                  })
                );
              }}
            />
          </td>
          <td className="px-2 py-2 border-r-2 border-cyan-500">
            <input
              className="w-11 border-b-2 border-black text-lg text-center font-medium bg-slate-50"
              type="number"
              defaultValue={`${el.c2}`}
              inputMode="numeric"
              min={0}
              max={20}
              autoComplete="off"
              onChange={(e) => {
                dispatch(
                  editC2({
                    id: el.id,
                    c2: evalNumber(e.target.value),
                  })
                );
              }}
            />
          </td>
          <td className="px-2 py-2 border-r-2 border-cyan-500">
            <input
              className="w-11 border-b-2 border-black text-lg text-center font-medium bg-slate-50"
              type="number"
              defaultValue={`${el.c3}`}
              inputMode="numeric"
              min={0}
              max={20}
              autoComplete="off"
              onChange={(e) => {
                dispatch(
                  editC3({
                    id: el.id,
                    c3: evalNumber(e.target.value),
                  })
                );
              }}
            />
          </td>
          <td className="px-2 py-2 border-r-2 border-cyan-500">
            <input
              className="w-11 border-b-2 border-black text-lg text-center font-medium bg-slate-50"
              type="number"
              defaultValue={`${el.c4}`}
              inputMode="numeric"
              min={0}
              max={20}
              autoComplete="off"
              onChange={(e) => {
                dispatch(
                  editC4({
                    id: el.id,
                    c4: evalNumber(e.target.value),
                  })
                );
              }}
            />
          </td>
          <td className="px-2 py-2 border-r-2 border-cyan-500">
            <input
              className="w-11 border-b-2 border-black text-lg text-center font-medium bg-slate-50"
              type="number"
              defaultValue={`${el.c5}`}
              inputMode="numeric"
              min={0}
              max={20}
              autoComplete="off"
              onChange={(e) => {
                dispatch(
                  editC5({
                    id: el.id,
                    c5: evalNumber(e.target.value),
                  })
                );
              }}
            />
          </td>
          <td className="px-2 py-2 border-r-2 border-cyan-500">
            <input
              className="w-11 border-b-2 border-black text-lg text-center font-medium bg-slate-50"
              type="number"
              defaultValue={`${el.c6}`}
              inputMode="numeric"
              min={0}
              max={20}
              autoComplete="off"
              onChange={(e) => {
                dispatch(
                  editC6({
                    id: el.id,
                    c6: evalNumber(e.target.value),
                  })
                );
              }}
            />
          </td>
          <td className="px-2 py-2 border-r-2 border-cyan-500">
            <input
              className="w-11 border-b-2 border-black text-lg text-center font-medium bg-slate-50"
              type="number"
              defaultValue={`${el.c7}`}
              inputMode="numeric"
              min={0}
              max={20}
              autoComplete="off"
              onChange={(e) => {
                dispatch(
                  editC7({
                    id: el.id,
                    c7: evalNumber(e.target.value),
                  })
                );
              }}
            />
          </td>
          <td className="px-2 py-2 border-r-2 border-cyan-500">
            <input
              className="w-11 border-b-2 border-black text-lg text-center font-medium bg-slate-50"
              type="number"
              defaultValue={`${el.c8}`}
              inputMode="numeric"
              min={0}
              max={20}
              autoComplete="off"
              onChange={(e) => {
                dispatch(
                  editC8({
                    id: el.id,
                    c8: evalNumber(e.target.value),
                  })
                );
              }}
            />
          </td>
          <td className="px-2 py-2 border-r-2 border-cyan-500">
            <input
              className="w-11 border-b-2 border-black text-lg text-center font-medium bg-slate-50"
              type="number"
              defaultValue={`${el.c9}`}
              inputMode="numeric"
              min={0}
              max={20}
              autoComplete="off"
              onChange={(e) => {
                dispatch(
                  editC9({
                    id: el.id,
                    c9: evalNumber(e.target.value),
                  })
                );
              }}
            />
          </td>
          <td className="px-2 py-2 border-r-2 border-cyan-500">
            <input
              className="w-11 border-b-2 border-black text-lg text-center font-medium bg-slate-50"
              type="number"
              defaultValue={`${el.c10}`}
              inputMode="numeric"
              min={0}
              max={20}
              autoComplete="off"
              onChange={(e) => {
                dispatch(
                  editC10({
                    id: el.id,
                    c10: evalNumber(e.target.value),
                  })
                );
              }}
            />
          </td>
          <td className="px-4 py-2">
            {isNaN(pContinuas[index]) ? "???" : pContinuas[index]}
          </td>
        </tr>
      ))}
    </Table>
  );
};

export default ContinuesTable;
