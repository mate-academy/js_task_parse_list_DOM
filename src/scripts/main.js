'use strict';

function saveEmployersData(nodelist) {
  const result = [];

  [...nodelist].map(employer => {
    result.push({
      innerHTML: employer.innerHTML,
      position: employer.dataset.position,
      salary: employer.dataset.salary,
      age: employer.dataset.age,
    });
  });

  return result;
}

const employers = document.querySelectorAll('li');

const sortedEmployers = saveEmployersData(employers).sort((a, b) => (
  +b.salary.slice(1).split(',').join('')
  - +a.salary.slice(1).split(',').join('')));

employers.forEach((employer, index) => {
  employer.innerHTML = sortedEmployers[index].innerHTML;
  employer.dataset.position = sortedEmployers[index].position;
  employer.dataset.salary = sortedEmployers[index].salary;
  employer.dataset.age = sortedEmployers[index].age;
});
