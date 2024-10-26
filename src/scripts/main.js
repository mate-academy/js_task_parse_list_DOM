'use strict';

const dataSalary = Array.from(document.querySelectorAll('Li'));

function sortList(list) {
  const sortElement = list.sort((a, b) => {
    const solaryA = Number(a.getAttribute('data-salary').replace(/[$,]/g, ''));
    const solaryB = Number(b.getAttribute('data-salary').replace(/[$,]/g, ''));

    return solaryB - solaryA;
  });

  return sortElement;
}

const listContainer = document.querySelector('ul');

listContainer.innerHTML = '';

sortList(dataSalary).forEach((element) => {
  listContainer.appendChild(element);
});

function getEmployees(list) {
  const result = list.map((item) => ({
    name: item.innerHTML.trim(),
    position: item.getAttribute('data-position'),
    salary: item.getAttribute('data-salary'),
    age: item.getAttribute('data-age'),
  }));

  return result;
}

getEmployees(sortList(dataSalary));
