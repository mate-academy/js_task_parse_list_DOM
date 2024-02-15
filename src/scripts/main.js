'use strict';

const liList = document.querySelectorAll('li');

function parseSalary(str) {
  return parseFloat(str.replace(/[^\d.-]/g, ''));
}

function sortList(list) {
  const sortedList = [...list].sort((li1, li2) => {
    const salary1 = parseSalary(li1.dataset.salary);
    const salary2 = parseSalary(li2.dataset.salary);

    return salary2 - salary1;
  });

  const dad = list[0].parentNode;

  dad.innerHTML = '';
  sortedList.forEach(item => dad.appendChild(item));
}

function getEmployees(list) {
  return [...list].map(person => {
    return {
      name: person.textContent.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });
}

sortList(liList);
getEmployees(liList);
