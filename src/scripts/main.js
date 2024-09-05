'use strict';

const empl = document.getElementsByTagName('li');

function getEmployeeArr(li) {
  return li.map((item) => ({
    name: item.innerText,
    ...item.dataset,
  }));
}

function sortList(list) {
  list.sort((x1, x2) => {
    const salary1 = parseFloat(x1.salary.replace(/[$,]/g, ''));
    const salary2 = parseFloat(x2.salary.replace(/[$,]/g, ''));

    return salary2 - salary1;
  });
}

const newList = getEmployeeArr(Array.from(empl));

sortList(newList);

for (let i = 0; i < empl.length; i++) {
  empl[i].innerText = newList[i].name;
  empl[i].dataset.position = newList[i].position;
  empl[i].dataset.salary = newList[i].salary;
  empl[i].dataset.age = newList[i].age;
}
