'use strict';

const employees = Array.from(document.querySelectorAll('li'));

function greatePeopeList(people) {
  return employees.map(person => ({
    name: person.textContent.trim(),
    ...person.dataset,
  }));
}

function filterPeopeList(people) {
  const sortedPeople = employees.sort((a, b) =>
    Number(b.dataset.salary.replace(/[^0-9]/gi, ''))
    - Number(a.dataset.salary.replace(/[^0-9]/gi, ''))
  );

  for (let i = 0; i < employees.length; i++) {
    document.querySelectorAll('li')[i].innerText = sortedPeople[i].innerText;
  }

  return sortedPeople;
}

createPeopeList(employees);
filterPeopeList(employees);
