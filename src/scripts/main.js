'use strict';

const body = document.body;
const list = body.children[1];

function createUser(elem) {
  const employeeName = elem.innerText;
  const position = elem.dataset.position;
  const salary = elem.dataset.salary;
  const age = Number(elem.dataset.age);

  return {
    name: employeeName, position, salary, age,
  };
}

function parseHTMLToObjects() {
  const employeesHTMLElemsArr = [...list.children];
  const parsedEmployees = employeesHTMLElemsArr.map(createUser);

  return parsedEmployees;
}

function sortBySalary(employees) {
  const sortedEmployees = employees.sort((employee1, employee2) => {
    const parseNumber = salary => Number(salary.slice(1).replaceAll(',', ''));

    const salary1 = parseNumber(employee1.salary);
    const salary2 = parseNumber(employee2.salary);

    if (salary1 > salary2) {
      return -1;
    };

    if (salary1 < salary2) {
      return 1;
    }

    return 0;
  });

  return sortedEmployees;
}

function render(employeesToRender) {
  const markup = employeesToRender.map(employee => (
    `
        <li
          data-position="${employee.position}"
          data-salary="${employee.salary}"
          data-age="${employee.age}"
        >
          ${employee.name}
        </li>
      `
  )).join('');

  list.innerHTML = markup;
}

function main() {
  const people = parseHTMLToObjects();
  const sortedPeople = sortBySalary(people);

  render(sortedPeople);
}

main();
