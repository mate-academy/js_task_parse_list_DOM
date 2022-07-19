'use strict';

function saveEmployersData(nodelist) {
  const result = [];

  for (const employer of nodelist) {
    result.push({
      innerHTML: employer.innerHTML,
      position: employer.dataset.position,
      salary: employer.dataset.salary,
      age: employer.dataset.age,
    });
  }

  return result;
}

const employers = document.querySelectorAll('li');

const sortedEmployers = saveEmployersData(employers).sort((a, b) => (
  +b.salary.slice(1).split(',').join('')
  - +a.salary.slice(1).split(',').join('')));

for (let i = 0; i < employers.length; i++) {
  employers[i].innerHTML = sortedEmployers[i].innerHTML;
  employers[i].dataset.position = sortedEmployers[i].position;
  employers[i].dataset.salary = sortedEmployers[i].salary;
  employers[i].dataset.age = sortedEmployers[i].age;
}
