'use strict';

// {
//   name,
//   position,
//   salary,
//   age
// }

function sortList(list) {
  return list.sort((a, b) => b.salary - a.salary);
}

function getEmployees(list) {
  const objects = [];

  list.forEach((e) => {
    const employeeName = e.textContent.trim();
    const position = e.getAttribute('data-position');
    const salary = parseInt(
      e.getAttribute('data-salary').replace('$', '').replace(',', ''),
      10,
    );
    const age = e.getAttribute('data-age');

    objects.push({
      name: employeeName,
      position,
      salary,
      age,
    });
  });

  return objects;
}

const employees = document.querySelectorAll('li');
let receivedList = getEmployees(employees);

receivedList = sortList(receivedList);

const ul = document.querySelector('ul');

ul.innerHTML = '';

receivedList.forEach((e) => {
  const li = document.createElement('li');

  li.textContent = e.name;
  li.setAttribute('data-age', e.age);
  li.setAttribute('data-salary', e.salary);
  li.setAttribute('data-position', e.position);
  ul.appendChild(li);
});
