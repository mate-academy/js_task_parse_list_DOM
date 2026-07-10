'use strict';

// write code here
function sortList(list) {
  const items = list.querySelectorAll('li');
  const itemsArr = [...items];

  sortItems(itemsArr);

  for (const item of itemsArr) {
    list.append(item);
  }
}

sortList(document.querySelector('ul'));

function getEmployees(list) {
  const employees = list.querySelectorAll('li');
  const employeesArr = [...employees];

  sortItems(employeesArr);

  const result = [];

  for (const employee of employeesArr) {
    const user = {
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: Number(
        employee.dataset.salary.replace('$', '').replaceAll(',', ''),
      ),
      age: employee.dataset.age,
    };

    result.push(user);
  }

  return result;
}

getEmployees(document.querySelector('ul'));

function sortItems(array) {
  array.sort((a, b) => {
    const salaryA = Number(
      a.dataset.salary.replace('$', '').replaceAll(',', ''),
    );
    const salaryB = Number(
      b.dataset.salary.replace('$', '').replaceAll(',', ''),
    );

    return salaryB - salaryA;
  });
}
