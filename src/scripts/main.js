'use strict';

let listItems = document.querySelectorAll('li');

const sortList = Array.from(listItems).sort((a, b) => {
  const salaryA = parseInt(a.getAttribute('data-salary').replace(/[$,]/g, ''));
  const salaryB = parseInt(b.getAttribute('data-salary').replace(/[$,]/g, ''));

  return salaryB - salaryA;
});


const getEmployees = (list) => {

  return list.map((el) => {

    return {
      name: el.textContent.trim(),
      position: el.getAttribute('data-position'),
      salary: el.getAttribute('data-salary'),
      age: el.getAttribute('data-age'),
    };
  })
}

listItems();
getEmployees();
