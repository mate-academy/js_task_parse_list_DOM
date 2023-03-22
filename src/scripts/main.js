'use strict';

// write code here
function sortList(ul) {
  const employees = getEmployees(ul);

  employees.sort((a, b) => b.salary - a.salary);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  employees.forEach((person, index) => {
    const child = ul.children[index];

    child.textContent = person.name;
    child.dataset.position = person.position;
    child.dataset.age = person.age;
    child.dataset.salary = formatter.format(person.salary);
  });
}

function getEmployees(ul) {
  const liList = ul.getElementsByTagName('li');

  if (liList.length === 0) {
    return [];
  }

  return [...liList].map((x) => {
    return {
      'name': x.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim(),
      'position': x.dataset.position,
      'salary': Number(x.dataset.salary.replace(/[^0-9.-]+/g, '')),
      'age': +x.dataset.age,
    };
  });
}

sortList(document.getElementsByTagName('ul')[0]);
