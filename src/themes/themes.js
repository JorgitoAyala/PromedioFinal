export const getRandomColor = () => {
  const randomColors = [
    ["bg-lime-600", "bg-lime-200"],
    ["bg-green-600", "bg-green-200"],
    ["bg-emerald-600", "bg-emerald-200"],
    ["bg-teal-600", "bg-teal-200"],
    ["bg-cyan-600", "bg-cyan-200"],
    ["bg-sky-600", "bg-sky-200"],
    ["bg-blue-600", "bg-blue-200"],
  ];

  let colors = randomColors.length - 1;

  let num = Math.floor(Math.random() * (colors - 0)) + 0;

  return randomColors[num];
};

export const chartColors = [
  ["rgb(255, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 0, 0, 0.3)"],
  ["rgb(0, 255, 4)", "rgb(0, 255, 4)", "rgb(0, 255, 4, 0.3)"],
  ["rgb(0, 17, 255)", "rgb(0, 17, 255)", "rgb(0, 17, 255, 0.3)"],
  ["rgb(255, 179, 0)", "rgb(255, 179, 0)", "rgb(255, 179, 0, 0.3)"],
  ["rgb(0, 238, 255)", "rgb(0, 238, 255)", "rgb(0, 238, 255, 0.3)"],
  ["rgb(238, 0, 255)", "rgb(238, 0, 255)", "rgb(238, 0, 255, 0.3)"],
  ["rgb(179, 255, 0)", "rgb(179, 255, 0)", "rgb(179, 255, 0, 0.3)"],
  ["rgb(0, 115, 255)", "rgb(0, 115, 255)", "rgb(0, 115, 255, 0.3)"],
  ["rgb(0, 242, 255)", "rgb(0, 242, 255)", "rgb(0, 242, 255, 0.3)"],
  ["rgb(43, 0, 255)", "rgb(43, 0, 255)", "rgb(43, 0, 255, 0.3)"],
  ["rgb(255, 221, 0)", "rgb(255, 221, 0)", "rgb(255, 221, 0, 0.3)"],
  ["rgb(255, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 0, 0, 0.3)"],
  ["rgb(157, 255, 0)", "rgb(157, 255, 0)", "rgb(157, 255, 0, 0.3)"],
  ["rgb(0, 17, 255)", "rgb(0, 17, 255)", "rgb(0, 17, 255, 0.3)"],
  ["rgb(255, 179, 0)", "rgb(255, 179, 0)", "rgb(255, 179, 0, 0.3)"],
];

export const paintChart = (array, colors) => {
  let paintChart = [];
  array.forEach((el, index) => {
    paintChart.push({
      data: el,
      tension: 0.3,
      borderColor: `${colors[index][0]}`,
      pointRadius: 6,
      pointBackgroundColor: `${colors[index][1]}`,
      backgroundColor: `${colors[index][2]}`,
    });
  });
  return paintChart;
};

export const bgColors = [
  ["bg-red-600", "bg-red-200"],
  ["bg-orange-600", "bg-orange-200"],
  ["bg-amber-600", "bg-amber-200"],
  ["bg-yellow-600", "bg-yellow-200"],
  ["bg-lime-600", "bg-lime-200"],
  ["bg-green-600", "bg-green-200"],
  ["bg-emerald-600", "bg-emerald-200"],
  ["bg-teal-600", "bg-teal-200"],
  ["bg-cyan-600", "bg-cyan-200"],
  ["bg-sky-600", "bg-sky-200"],
  ["bg-blue-600", "bg-blue-200"],
  ["bg-indigo-600", "bg-indigo-200"],
  ["bg-violet-600", "bg-violet-200"],
  ["bg-purple-600", "bg-purple-200"],
  ["bg-fuchsia-600", "bg-fuchsia-200"],
  ["bg-pink-600", "bg-pink-200"],
  ["bg-rose-600", "bg-rose-200"],
];
