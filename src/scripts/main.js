'use strict';

// @returns {Array<object>}

function getEmployeesArray() {
  const employeeListItems = document.querySelectorAll('ul > li');
  const employeesArray = [];

  employeeListItems.forEach((liElement) => {
    const employeeName = liElement.textContent.trim();
    const position = liElement.dataset.position;
    const ageString = liElement.dataset.age;
    const salaryString = liElement.dataset.salary;
    const cleanedSalaryString = salaryString
      .replace('$', '')
      .replaceAll(',', '');
    const age = Number(ageString);
    const salary = Number(cleanedSalaryString);

    if (isNaN(age) || isNaN(salary)) {
      return;
    }

    const employee = {
      name: employeeName,
      position,
      salary,
      age,
    };

    employeesArray.push(employee);
  });

  return employeesArray;
}

function sortListBySalary() {
  const listItems = document.querySelectorAll('ul > li');

  if (listItems.length === 0) {
    return;
  }

  const listItemsArray = [...listItems];

  listItemsArray.sort((a, b) => {
    const salaryStringA = a.dataset.salary;
    const cleanedStringA = salaryStringA.replace('$', '').replaceAll(',', '');
    const salaryA = Number(cleanedStringA);

    const salaryStringB = b.dataset.salary;
    const cleanedStringB = salaryStringB.replace('$', '').replaceAll(',', '');
    const salaryB = Number(cleanedStringB);

    if (isNaN(salaryA) || isNaN(salaryB)) {
      return 0;
    }

    return salaryB - salaryA;
  });

  const listContainer = listItems[0].parentNode;

  if (listContainer) {
    listItemsArray.forEach((liElement) => {
      listContainer.appendChild(liElement);
    });
  }
}

sortListBySalary();

getEmployeesArray();
