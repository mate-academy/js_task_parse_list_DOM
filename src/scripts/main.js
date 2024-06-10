'use strict';

const parsedData = document.querySelectorAll('li');
const data = [];

parsedData.forEach((item) => {
  const personName = item.textContent.trim();
  const personPosition = item.getAttribute('data-position');
  const personSalary = item.getAttribute('data-salary');
  const personAge = item.getAttribute('data-age');

  data.push({
    name: personName,
    position: personPosition,
    salary: personSalary,
    age: personAge,
  });
});

const convertToNumber = (salaryString) => {
  return parseFloat(salaryString.replace(/[^0-9.-]+/g, ''));
};

const sortList = (list) => {
  list.sort((a, b) => convertToNumber(b.salary) - convertToNumber(a.salary));
};

const getEmployees = (list) => {
  return list.map((person) => {
    return {
      name: person.name,
      position: person.position,
      salary: convertToNumber(person.salary),
      age: person.age,
    };
  });
};

sortList(data);

const employees = getEmployees(data);

const listContainer = document.querySelector('ul');

listContainer.innerHTML = ''; // очищую список

employees.forEach((employee) => {
  const listItem = document.createElement('li');

  listItem.textContent = employee.name;
  listItem.setAttribute('data-position', employee.position);
  listItem.setAttribute('data-salary', `$${employee.salary.toLocaleString()}`);
  listItem.setAttribute('data-age', employee.age);
  listContainer.appendChild(listItem);
});
