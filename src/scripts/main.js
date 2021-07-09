'use strict';

const employees = [ ...document.querySelectorAll('li') ];
const employeesList = document.querySelector('ul');

const employeesListWithName = employees.map((item, index) => {
  item.dataset.name = employees[index].textContent.trim();

  return item.dataset;
});

const convertSalary = (str) => +(str.slice(1, str.length).split(',').join(''));

employeesListWithName.sort((a, b) =>
  convertSalary(b.salary) - convertSalary(a.salary));

employeesList.innerHTML = (employeesListWithName).map(item =>
  `<li>
    ${item.name}
  </li>`).join('');
