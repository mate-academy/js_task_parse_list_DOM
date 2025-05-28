'use strict';
const listElement = document.querySelector('ul');
function sortList(list) {
  let listItems = Array.from(document.querySelectorAll('li'));

  const sorted = listItems.sort((a, b) => {
    let salaryA = Number(a.dataset.salary.replaceAll('$', '').replaceAll(',', ''));
    let salaryB = Number(b.dataset.salary.replaceAll('$', '').replaceAll(',', ''));

    return salaryB - salaryA;
  });

  sorted.forEach(li => list.appendChild(li));
}
sortList(listElement);

function getEmployees(list) {
let result = [];
let listItems = Array.from(document.querySelectorAll('li'));
for (let i = 0; i < listItems.length; i++) {
  let li = listItems[i];
  let newObject = {
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: li.dataset.salary,
    age: li.dataset.age,
  }

  result.push(newObject);
}

return result;
}

getEmployees(listElement);
