'use strict';

function getSalary(employee) {
  return parseInt(employee.dataset.salary.slice(1).replace(',', ''));
}

function seperateSalary(salary) {
  const salaryBeforeSeparation = salary.toString();
  let separatedSalary = '$';

  for (let i = 0; i < salaryBeforeSeparation.length; i++) {
    if ((salaryBeforeSeparation.length - i) % 3 === 0 && i !== 0) {
      separatedSalary += ',';
    }

    separatedSalary += salaryBeforeSeparation[i];
  }

  return separatedSalary;
}

function getEmployees(list) {
  const employees = [];

  for (const employee of list.children) {
    employees.push({
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: getSalary(employee),
      age: employee.dataset.age,
    });
  }

  return employees;
}

function sortList(list) {
  const employees = getEmployees(list);

  employees.sort(
    (firstEmployee, secondEmployee) =>
      secondEmployee.salary - firstEmployee.salary,
  );

  const sortedList = list.cloneNode();

  for (const employee of employees) {
    const listItem = document.createElement('li');

    listItem.textContent = employee.name;
    listItem.dataset.position = employee.position;
    listItem.dataset.salary = seperateSalary(employee.salary);
    listItem.dataset.age = employee.age;

    sortedList.append(listItem);
  }

  return sortedList;
}

const listOfEmolyees = document.querySelector('ul');

listOfEmolyees.replaceWith(sortList(listOfEmolyees));
