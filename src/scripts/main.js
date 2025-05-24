'use strict';

const employeesList = document.querySelectorAll('li');
const container = document.querySelector('ul');

function getEmployeesData() {
  return Array.from(employeesList).map((li) => ({
    name: li.dataset.name,
    position: li.dataset.position,
    salary: Number(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

function sortDOMBySalary() {
  const sortedList = Array.from(employeesList).sort(
    (a, b) => {
      const aSalary = +a.dataset.salary.slice(1).replaceAll(',', '');
      const bSalary = +b.dataset.salary.slice(1).replaceAll(',', '');

      return bSalary - aSalary;
    }
  );

  container.innerHTML = '';
  sortedList.forEach((li) => container.appendChild(li));
}

getEmployeesData();
sortDOMBySalary();
