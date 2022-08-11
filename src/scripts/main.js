'use strict';

const employeesList = document.querySelectorAll('li[data-position]');

const parseSalary = str => +str.replace(/\D/g, '');

const sortList = list => {
  let isReordered;
  const sortedList = [...list];

  do {
    isReordered = false;

    for (let i = 1; i < sortedList.length; i++) {
      const prevElement = sortedList[i - 1];
      const currentElement = sortedList[i];
      const prevSalary = parseSalary(prevElement.dataset.salary);
      const currentSalary = parseSalary(currentElement.dataset.salary);

      if (prevSalary < currentSalary) {
        sortedList[i] = prevElement;
        sortedList[i - 1] = currentElement;
        isReordered = true;
      }
    }
  } while (isReordered);

  sortedList.forEach(item => item.parentElement.appendChild(item));
};

const getEmployees = list => [...list].map(element => ({
  name: element.textContent.trim(),
  position: element.dataset.position,
  salary: element.dataset.salary,
  age: element.dataset.age,
}));

sortList(employeesList);
getEmployees(employeesList);
