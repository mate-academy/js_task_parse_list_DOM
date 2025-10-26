'use strict';

const list = document.querySelector('ul');

const parseSalary = (salaryString) => {
  return Number(salaryString.replace(/[$,]/g, ''));
};

const sortList = (ulLink) => {
  const items = Array.from(ulLink.children);

  items.sort((firstElement, secondElement) => {
    const firstElementSalary = parseSalary(firstElement.dataset.salary);

    const secondElementSalary = parseSalary(secondElement.dataset.salary);

    return secondElementSalary - firstElementSalary;
  });

  ulLink.innerHTML = '';
  items.forEach((item) => ulLink.append(item));
};

const getEmployees = (ulLink) => {
  const items = Array.from(ulLink.children);

  return items.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
};

sortList(list);

// eslint-disable-next-line no-unused-vars
const employees = getEmployees(list);
