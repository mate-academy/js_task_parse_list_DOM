'use strict';

const element = [...document.querySelectorAll('li')];

const attrib = element.map((attr) => {
  return {
    name: attr.innerText,
    position: attr.getAttribute('data-position'),
    salary: attr.getAttribute('data-salary'),
    age: attr.getAttribute('data-age'),
  };
});

function dataFormat(str) {
  return parseFloat(str.replace(/[^\d.-]/g, ''));
}

const sortedAttrib = [...attrib].sort((salary1, salary2) => {
  return dataFormat(salary2.salary) - dataFormat(salary1.salary);
});

element.map((sortSalary, i) => {
  sortSalary.setAttribute('data-position', sortedAttrib[i].position);
  sortSalary.setAttribute('data-salary', sortedAttrib[i].salary);
  sortSalary.setAttribute('data-age', sortedAttrib[i].age);
  sortSalary.textContent = sortedAttrib[i].name;
});
