'use strict';

const employeeList = [...document.querySelectorAll('li')];
const listParent = document.querySelector('ul');

const moneyParser = (money) =>
  Number(money.replaceAll('$', '').replaceAll(',', ''));

const sortList = (list) => {
  const sorted = list.sort(
    (item1, item2) =>
      moneyParser(item2.dataset.salary) - moneyParser(item1.dataset.salary),
  );

  listParent.replaceChildren(...sorted);
};

const getEmployees = (list) => {
  return list.map((employee) => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
};

sortList(employeeList);
getEmployees(employeeList);
