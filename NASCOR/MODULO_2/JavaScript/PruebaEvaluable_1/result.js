transformToNumber = (array) => {
  array.forEach((value, i, array) => {
    array[i] = Number(value);
  });
  return array;
};

calculateAverage = (array) => {
  let counter = 0;
  let length = array.length;
  for (i = 0; i < length; i++) {
    counter += array[i];
  }
  const result = counter / length;

  return result.toFixed(2);
};

calculateFinalGrade = (average) => {
  let result;
  if (average < 5) {
    result = "Suspenso";
  } else if (average < 6) {
    result = "Suficiente";
  } else if (average < 7) {
    result = "Bien";
  } else if (average < 8) {
    result = "Notable";
  } else {
    result = "Sobresaliente";
  }

  return result;
};

getParams = () => {
  const grade = [];
  const params = new URLSearchParams(window.location.search);
  const studentName = params.get("studentName");

  for (i = 1; i < 6; i++) {
    let gradeValue = params.get(`grade${i}`);
    if (gradeValue) {
      grade.push(gradeValue);
    }
  }

  transformToNumber(grade);
  return { studentName, grade };
};
const data = getParams();

console.log("grade => ", data.grade);
const average = calculateAverage(data.grade);

const finalGrade = calculateFinalGrade(average);

const result = document.getElementById("result");

result.innerHTML = `
<table>
    <tr>
        <th>Nombre:</th>
        <td>${data.studentName}</td>
    </tr>
    <tr>
        <th>Nota 1:</th>
        <td>${data.grade[0]}</td>
    </tr>
    <tr>
        <th>Nota 2:</th>
        <td> ${data.grade[1]}</td>
    </tr>
    <tr>
        <th>Nota 3:</th>
        <td> ${data.grade[2]}</td>
    </tr>
    <tr>
        <th>Nota 4:</th>
        <td> ${data.grade[3]}</td>
    </tr>
    <tr>
        <th>Nota 5:</th>
        <td> ${data.grade[4]}</td>
    </tr>
    <tr>
        <th>Media:</th>
        <td> ${average}</td>
    </tr>
    <tr>
        <th>Nota final:</th>
        <td> ${finalGrade}</td>
    </tr>
</table>
    `;
