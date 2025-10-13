'use strict';

const employeesArray = document.querySelectorAll('[data-salary]');

function sortBySalary(employees) {
  const sortedArray = Array.from(employees).sort((a, b) => {
    const salaryA = parseFloat(
      a.dataset.salary.replace('$', '').replace(',', ''),
    );

    const salaryB = parseFloat(
      b.dataset.salary.replace('$', '').replace(',', ''),
    );

    return salaryB - salaryA;
  });

  const parents = employees[0].parentNode;

  sortedArray.forEach((element) => {
    parents.appendChild(element);
  });
}

function employeesToObjectArray(employees) {
  const employeesList = Array.from(employees).map((employee) => {
    return {
      name: employee.textContent.replace(/\n/g, '').trim(),
      position: employee.dataset.position,
      salary: parseFloat(
        employee.dataset.salary.replace('$', '').replace(',', ''),
      ),
      age: parseInt(employee.dataset.age, 10),
    };
  });

  return employeesList;
}

sortBySalary(employeesArray);
employeesToObjectArray(employeesArray);
