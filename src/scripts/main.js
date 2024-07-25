'use strict';

// Получаем все элементы <li>
const empl = document.getElementsByTagName('li');

function getEmployeeArr(li) {
  const emplpoeys = [];

  for (let i = 0; i < empl.length; i++) {
    const emp = {
      name: li[i].innerText,
      ...li[i].dataset,
    };

    emplpoeys.push(emp);
  }

  return emplpoeys;
}

const lalala = getEmployeeArr(empl).sort((x1, x2) => {
  const salary1 = parseFloat(x1.salary.replace(/[$,]/g, ''));
  const salary2 = parseFloat(x2.salary.replace(/[$,]/g, ''));

  return salary1 - salary2;
});

for (let i = 0; i < empl.length; i++) {
  empl[i].innerText = lalala[i].name;
  empl[i].dataset.position = lalala[i].position;
  empl[i].dataset.salary = lalala[i].salary;
  empl[i].dataset.age = lalala[i].age;
}
