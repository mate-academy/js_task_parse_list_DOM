'use strict';

const list = document.querySelector('ul');
const items = Array.from(list.querySelectorAll('li'));

function sortList() {
  items.sort((a, b) => {
    return (
      Number(b.getAttribute('data-salary').slice(1).replaceAll(',', '')) -
      Number(a.getAttribute('data-salary').slice(1).replaceAll(',', ''))
    );
  });

  list.innerHTML = '';
  items.forEach((item) => list.appendChild(item));
}

function getEmployees() {
  return items.map((item) => ({
    name: item.innerText,
    position: item.getAttribute('data-position'),
    salary: item.getAttribute('data-salary'),
    age: item.getAttribute('data-age'),
  }));
}

sortList();
getEmployees();
