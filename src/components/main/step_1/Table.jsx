import { useSelector } from "react-redux";

const Table = (props) => {
  //Seleccionar lo que necesitas de la store
  const courses = useSelector((store) => store.course);

  return (
    <div className="inline-block min-w-full border-2 border-cyan-500 rounded-lg shadow-xl overflow-hidden">
      <table className="min-w-full leading-normal">
        <thead>
          <tr className="bg-cyan-500 text-center text-white text-md font-bold uppercase">
            {props.header.map((el, index) => (
              <th className="px-4 py-2" key={index}>
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {courses.length === 0 ? (
            <tr className="border-b-2 border-cyan-500 text-center uppercase font-medium bg-slate-50">
              <td colSpan={props.header.length} className="px-4 py-2">
                No hay nada que mostrar
              </td>
            </tr>
          ) : (
            props.children
          )}
          <tr className="text-left font-medium bg-yellow-50">
            <td
              colSpan={props.header.length}
              className="px-4 py-2 font-semibold"
            >
              <div className="flex justify-between">
                <p className="py-1">
                  <b className="font-bold text-red-500">Leyenda:</b>
                  {` ${props.legend}`}
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
