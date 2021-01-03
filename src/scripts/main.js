'use strict';

const list = document.querySelector('ul');

sortList(list);
getEmployees(list);

function sortList(subjectList) {
  const employees = subjectList.querySelectorAll('li');
  const sorted = [...employees].sort((a, b) => {
    const salaryA = getSalary(a.dataset.salary);
    const salaryB = getSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  sorted.forEach(employee => {
    subjectList.append(employee);
  });

  return sorted;
}

function getEmployees(subjectList) {
  const employees = subjectList.querySelectorAll('li');

  return [...employees].map(employee => {
    return {
      name: employee.textContent,
      position: employee.dataset.position,
      salary: getSalary(employee.dataset.salary),
      age: Number(employee.dataset.age),
    };
  });
}

function getSalary(input) {
  return Number(input
    .slice(1)
    .split(',')
    .join('')
  );
}
