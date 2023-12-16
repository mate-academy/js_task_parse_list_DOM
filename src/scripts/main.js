'use strict';

const employeeList = document.querySelector('ul');
const allEmployees = document.querySelectorAll('li');

function extractNumber(string) {
  const trimmedString = string.slice(1);
  const parsedNumber = parseFloat(trimmedString);

  return parseFloat(parsedNumber);
}

function sortEmployees(arr) {
  const employeeArray = Array.from(arr);

  employeeArray.sort((a, b) => {
    const salaryA = extractNumber(a.dataset.salary);
    const salaryB = extractNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  return employeeArray;
}

function generateEmployeeData(arr) {
  const employeeData = [];

  arr.forEach(item => {
    employeeData.push({
      fullName: item.textContent.trim(),
      positionTitle: item.dataset.position,
      monthlySalary: item.dataset.salary,
      personAge: item.dataset.age,
    });
  });

  return employeeData;
}

const sortedEmployeeList = sortEmployees(allEmployees);

employeeList.innerHTML = `
  <ul>
    ${sortedEmployeeList.map(item => `
      <li
        data-position=${item.dataset.position}
        data-salary=${item.dataset.salary}
        data-age=${item.dataset.age}
      >
        ${item.innerText}
      </li>
    `).join('')}
  </ul>
`;

generateEmployeeData(allEmployees);
sortEmployees(allEmployees);
