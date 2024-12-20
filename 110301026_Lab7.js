let grades = [];

function addGrade() {
  const mathInput = document.getElementById('math');
  const englishInput = document.getElementById('english');
  const math = parseFloat(mathInput.value);
  const english = parseFloat(englishInput.value);

  if (isNaN(math) || isNaN(english) || math < 0 || english < 0) {
    alert('Please enter valid grade!');
    return;
  }

  const rowAverage = ((math + english) / 2).toFixed(2);
  grades.push({ math, english, average: parseFloat(rowAverage) });

  const tableBody = document.querySelector('#gradesTable tbody');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${grades.length}</td>
    <td>${math}</td>
    <td>${english}</td>
    <td>${rowAverage}</td>
  `;

  tableBody.appendChild(row);

  updateAverages();

  mathInput.value = '';
  englishInput.value = '';
}

function updateAverages() {
  let mathTotal = 0, englishTotal = 0, overallTotal = 0;

  grades.forEach(grade => {
    mathTotal += grade.math;
    englishTotal += grade.english;
    overallTotal += grade.average;
  });

  const mathAvg = (mathTotal / grades.length).toFixed(2);
  const englishAvg = (englishTotal / grades.length).toFixed(2);
  const overallAvg = (overallTotal / grades.length).toFixed(2);

  document.getElementById('mathAverage').textContent = mathAvg;
  document.getElementById('englishAverage').textContent = englishAvg;
  document.getElementById('overallAverage').textContent = overallAvg;
}
