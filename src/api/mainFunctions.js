/*Cursos*/
export const cursos = (data) => {
  let cursos = [];
  data.forEach((el) => {
    cursos.push(el.nombre);
  });
  return cursos;
};

/*Generales*/
export const evalGenerales = (data) => {
  let evalGenerales = [];
  data.forEach((el) => {
    evalGenerales.push([el.p1, el.p2, el.p3, el.ef]);
  });
  return evalGenerales;
};

export const puntajeGenerales = (evalGenerales) => {
  const valorParciales = [0.1, 0.2, 0.2, 0.3];
  let puntajeGenerales = evalGenerales.map((el) =>
    el.map((el, index) => parseFloat((el * valorParciales[index]).toFixed(1)))
  );
  return puntajeGenerales;
};

/*Continuas*/
export const evalContinuas = (data) => {
  let evalContinuas = [];
  data.forEach((el) => {
    evalContinuas.push([
      el.c1,
      el.c2,
      el.c3,
      el.c4,
      el.c5,
      el.c6,
      el.c7,
      el.c8,
      el.c9,
      el.c10,
    ]);
  });
  return evalContinuas;
};

export const promContinuas = (evalContinuas) => {
  let promContinuas = [];
  evalContinuas.forEach((el) => {
    let sinNull = 0;
    let sumatoria = 0;
    for (let i = 0; i < el.length; i++) {
      sumatoria += el[i];
      el[i] !== null && sinNull++;
    }
    let valor = parseFloat((sumatoria / sinNull).toFixed(1));
    promContinuas.push(isNaN(valor) ? 0 : valor);
  });
  return promContinuas;
};

export const puntajeContinuas = (promContinuas) => {
  let puntajeContinuas = promContinuas.map((el) =>
    parseFloat((el * 0.2).toFixed(1))
  );
  return puntajeContinuas;
};

/*Finales*/
export const promFinal = (puntajeGenerales, puntajeContinuas) => {
  let promFinal = [];

  let sumPuntajeGenerales = [];
  puntajeGenerales.forEach((el) => {
    let total = 0;
    for (let i of el) total += i;
    sumPuntajeGenerales.push(total);
  });

  for (let i = 0; i < puntajeGenerales.length; i++) {
    promFinal.push(
      parseFloat((sumPuntajeGenerales[i] + puntajeContinuas[i]).toFixed(1))
    );
  }

  return promFinal;
};

export const condicionFinal = (promFinal) => {
  let condicionFinal = [];

  promFinal.forEach((el) => {
    if (el >= 10.5 && el <= 20) {
      condicionFinal.push(["Felicidades, has aprobado 😄!!", "bg-green-700"]);
    } else {
      condicionFinal.push(["Todavía no has aprobado 😯", "bg-red-600"]);
    }
  });

  return condicionFinal;
};

/*
  let array = courses;

  //Generales
  console.log("nombres", cursos(array));
  console.log("evalGenerales", evalGenerales(array));
  console.log("puntajesGenerales", puntajeGenerales(evalGenerales(array)));

  //Continuas
  console.log("evalContinuas", evalContinuas(array));
  console.log("promContinuas", promContinuas(evalContinuas(array)));
  console.log(
    "puntajeContinuas",
    puntajeContinuas(promContinuas(evalContinuas(array)))
  );

  //Finales
  console.log(
    "promFinal",
    promFinal(
      puntajeGenerales(evalGenerales(array)),
      puntajeContinuas(promContinuas(evalContinuas(array)))
    )
  );
  console.log(
    "Condicion final",
    condicionFinal(
      promFinal(
        puntajeGenerales(evalGenerales(array)),
        puntajeContinuas(promContinuas(evalContinuas(array)))
      )
    )
  );
*/
