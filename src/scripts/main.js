'use strict';

const items = document.querySelectorAll('li');
const list = [...items].map((item) => {
  return {
    name: item.innerText,
    position: item.dataset.position,
    salary: parseInt(item.dataset.salary.replace('$', '').replace(',', '')),
    age: item.dataset.age,
  };
});

function sortList() {
  list.sort((a, b) => b.salary - a.salary);

  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute('data-position', list[i].position);
    items[i].setAttribute('data-salary', `$${list[i].salary}`);
    items[i].setAttribute('data-age', list[i].age);
    items[i].textContent = list[i].name;
  }
}

function getEmployees() {
  return list;
}

sortList();
getEmployees();
