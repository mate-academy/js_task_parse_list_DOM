'use strict';

const listFromDocument = document.querySelectorAll('li');

const parseSalary = (salaryString) => {
  return parseFloat(salaryString.replace(/[^0-9]+/g, ''));
};

const sortList = (list) => {
  const listArray = Array.from(list);

  listArray.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  const parentElement = list[0].parentNode;

  parentElement.innerHTML = '';
  listArray.forEach((item) => parentElement.appendChild(item));

  return listArray;
};

const getEmployees = (list) => {
  return Array.from(list).map((item) => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
};

sortList(listFromDocument);

const employees = getEmployees(sortList(listFromDocument));

// eslint-disable-next-line no-console
console.log(employees);
