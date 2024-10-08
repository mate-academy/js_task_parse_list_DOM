'use strict';

// write code here

const employees = document.querySelectorAll('li');

// - first, which sorts the list by salary from data attributes
function sortList([...list]) {
  const newList = list.sort((a, b) => {
    const salaryA = Number(
      a.getAttribute('data-salary').replace(/[^0-9.-]+/g, ''),
    );
    const salaryB = Number(
      b.getAttribute('data-salary').replace(/[^0-9.-]+/g, ''),
    );

    return salaryB - salaryA;
  });

  const paren = list[0].parentNode;

  while (paren.firstChild) {
    paren.removeChild(paren.firstChild);
  }

  newList.forEach((item) => {
    paren.appendChild(item);
  });
}

function getEmployees([...list]) {
  const result = [];

  for (let i = 0; i < list.length; i++) {
    result.push({
      name: list[i].textContent.trim(),
      position: list[i].getAttribute('data-position'),
      salary: list[i].getAttribute('data-salary'),
      age: list[i].getAttribute('data-age'),
    });
  }

  return result;
}

sortList(employees);
getEmployees(employees);

/* <li
        data-position="Accountant"
        data-salary="$162,700"
        data-age="33"
      >
        Airi Satou
</li> */
