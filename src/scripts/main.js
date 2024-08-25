'use strict';

const people = document.querySelector('ul');

sortList(people);
getEmployees(people);

function sortList(list) {
  const sortedList = [...list.children].sort((person1, person2) => {
    return (
      person2.dataset.salary.replace(/[$,]/g, '') -
      person1.dataset.salary.replace(/[$,]/g, '')
    );
  });

  list.innerHTML = '';

  sortedList.forEach((val) => {
    list.append(val);
  });
}

function getEmployees(list) {
  return [...list.children].map((val) => {
    const position = val.dataset.position;
    const salary = val.dataset.salary;
    const age = val.dataset.age;
    const personName = val.textContent.trim();

    return {
      name: personName,
      position,
      salary,
      age,
    };
  });
}
