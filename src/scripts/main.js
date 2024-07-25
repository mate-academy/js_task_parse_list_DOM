'use strict';

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

function sortList(list) {
  list.sort((x1, x2) => {
    const salary1 = parseFloat(x1.salary.replace(/[$,]/g, ''));
    const salary2 = parseFloat(x2.salary.replace(/[$,]/g, ''));

    return salary1 - salary2;
  });
}

const newList = getEmployeeArr(empl);

sortList(newList);

for (let i = 0; i < empl.length; i++) {
  empl[i].innerText = newList[i].name;
  empl[i].dataset.position = newList[i].position;
  empl[i].dataset.salary = newList[i].salary;
  empl[i].dataset.age = newList[i].age;
}
