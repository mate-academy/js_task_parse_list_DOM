'use strict';

class Employer {
  constructor(fullName, position, salary, age) {
    this.name = fullName;
    this.position = position;
    this.salary = salary;
    this.age = age;
  }
}

const employers = [];

const li = document.querySelectorAll('li');
const fullNames = [...li].map(item => item.innerText);
const positions = [...li].map(item => item.getAttribute('data-position'));
const salaries = [...li].map(item =>
  Number(item.getAttribute('data-salary').split('').filter(element =>
    element !== '$' && element !== ',').join('')));
const ages = [...li].map(item => item.getAttribute('data-age'));

for (let i = 0; i < li.length; i++) {
  employers[employers.length] = new Employer(fullNames[i],
    positions[i], salaries[i], ages[i]);
}

employers.sort((first, second) => second.salary - first.salary);

employers.forEach((employer, i) => {
  li[i].innerText = employer.name;
  li[i].dataset.position = employer.position;
  li[i].dataset.salary = '$' + employer.salary.toLocaleString();
  li[i].dataset.age = employer.age;
});
