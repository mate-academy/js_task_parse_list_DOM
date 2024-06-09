'use strict';

const parsedData = document.querySelectorAll('li');
const data = [];

parsedData.forEach((item) => {
  const personName = item.textContent;
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

const convertToNumber = (person) => {
  return +person.salary;
};

const sortList = (list) => {
  list.sort((a, b) => {
    return convertToNumber(b) - convertToNumber(a);
  });
};

const getEmployees = (list) => {
  return list.map((person) => {
    return {
      name: person.name,
      position: person.position,
      salary: +person.salary,
      age: person.age,
    };
  });
};

sortList(data);

const employees = getEmployees(data);

parsedData.forEach((item, index) => {
  item.textContent = employees[index].name;
  item.setAttribute('data-position', employees[index].position);
  item.setAttribute('data-salary', employees[index].salary);
  item.setAttribute('data-age', employees[index].age);
});
