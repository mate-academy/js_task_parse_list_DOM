'use strict';

// write code here
const list = document.querySelectorAll('li');

function sortList(items) {
  const masiv = Array.from(items);
  const result1 = masiv.sort(
    (a, b) =>
      Number(b.dataset.salary.replace('$', '').replace(',', '')) -
      Number(a.dataset.salary.replace('$', '').replace(',', '')),
  );

  const ul = list[0].parentElement;

  result1.forEach((item) => ul.appendChild(item));

  return result1;
}

function getEmployees(items) {
  const result = [];

  for (const item of items) {
    const employeeName = item.dataset.name;
    const position = item.dataset.position;
    const salary = Number(
      item.dataset.salary.replace('$', '').replace(',', ''),
    );
    const age = item.dataset.age;

    result.push({
      employeeName,
      position,
      salary,
      age,
    });
  }

  return result;
}

sortList(list);
getEmployees(list);
