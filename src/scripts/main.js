'use strict';

const list = document.querySelector('ul');
const items = Array.from(list.querySelectorAll('li'));

const sortList = () => {
  items.sort((a, b) => {
    return (
      Number(b.getAttribute('data-salary').replace(/\D/g, '')) -
      Number(a.getAttribute('data-salary').replace(/\D/g, ''))
    );
  });

  list.innerHTML = '';
  items.forEach((item) => list.appendChild(item));
};

const getEmployees = () => {
  return items.map((item) => ({
    name: item.innerText,
    position: item.getAttribute('data-position'),
    salary: item.getAttribute('data-salary'),
    age: item.getAttribute('data-age'),
  }));
};

sortList();
getEmployees();
