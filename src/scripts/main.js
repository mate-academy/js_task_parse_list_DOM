'use strict';

const listElement = document.querySelector('ul');
const workersArr = [...listElement.children];

function parseSalary(salaryString) {
  return +salaryString.replace(/[$,]/g, '');
}

function sortList(arr) {
  const sortedList = arr.sort((a, b) => {
    const salary1 = parseSalary(a.dataset.salary);
    const salary2 = parseSalary(b.dataset.salary);

    return salary2 - salary1;
  });

  listElement.append(...sortedList);
}

function getEmployees(arr) {
  return arr.map((item) => {
    return {
      name: item.dataset.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

sortList(workersArr);
getEmployees(workersArr);
