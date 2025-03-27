'use strict';

const dataSalary = 'data-salary';

const list = document.querySelector('ul');

sortList(list);

getEmployees(list);

function sortList(ul) {
  [...ul.children].sort((child1, child2) => {
    const s1 = convertSalaryToInt(child1.getAttribute(dataSalary));
    const s2 = convertSalaryToInt(child2.getAttribute(dataSalary));

    return s2 - s1;
  }).forEach(child => list.append(child));
}

function convertSalaryToInt(text = '') {
  const normalizedText = text.replaceAll('$', '').replaceAll(',', '');
  const salary = parseInt(normalizedText);

  if (isNaN(salary)) {
    return 0;
  }

  return salary;
}

function getEmployees(ul) {
  const parseResult = [...ul.children].map(child => {
    return {
      name: child.textContent,
      position: child.dataset.position,
      salary: child.dataset.salary,
      age: child.dataset.age,
    };
  });

  return parseResult;
}
