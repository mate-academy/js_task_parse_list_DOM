'use strict';

// write code here

document.addEventListener('DOMContentLoaded', () => {
  const employersList = document.querySelector('ul');
  const employers = Array.from(document.querySelectorAll('li'));

  function getSalary(element) {
    const salary = element.dataset.salary;
    const clean = salary.replace(/[$,]/g, '');

    return Number(clean);
  }

  function getPosition(element) {
    const position = element.dataset.position;

    return position;
  }

  function getAge(element) {
    const age = element.dataset.age;

    return Number(age);
  }

  function sortEmployers(listItems) {
    const sortedEmployers = [...listItems].sort((a, b) => {
      return getSalary(b) - getSalary(a);
    });

    employersList.innerHTML = '';
    sortedEmployers.forEach((item) => employersList.appendChild(item));
  }

  function getEmployees(listItems) {
    return listItems.map((item) => {
      return {
        name: item.textContent.trim(),
        position: getPosition(item),
        salary: getSalary(item),
        age: getAge(item),
      };
    });
  }

  sortEmployers(employers);

  const workers = getEmployees(employers);

  return workers;
});
