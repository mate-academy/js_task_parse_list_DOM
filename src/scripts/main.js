'use strict';

const employeeList = document.querySelector('ul');

const employee = Array.from(document.querySelectorAll('li'));

function sortEmployeeList(people) {
  const sortList = people.sort((a, b) =>
    +b.dataset.salary.replace(',', '').replace('$', '')
  - +a.dataset.salary.replace(',', '').replace('$', ''));

  employeeList.append(...sortList);
}

function employeeObjects(people) {
  return people.map(person => (
    {
      name: person.innerText,
      ...person.dataset,
    }
  ));
}

sortEmployeeList(employee);
employeeObjects(employee);
