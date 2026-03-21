'use strict';

function toNumber(salareString) {
  return Number(salareString.split('$').join('').split(',').join(''));
}

function sortList(t) {
  const r = t.querySelectorAll('li');
  const k = Array.from(r);

  for (let i = 0; i < k.length; i++) {
    for (let j = i; j < k.length; j++) {
      let f = 0;

      const number1 = toNumber(k[i].getAttribute('data-salary'));
      const number2 = toNumber(k[j].getAttribute('data-salary'));

      if (number2 > number1) {
        f = k[j];
        k[j] = k[i];
        k[i] = f;
      }
    }
  }

  k.forEach((li) => t.append(li));
}

const p = document.querySelector('ul');

sortList(p);

function getEmployees(list) {
  const r = list.querySelectorAll('li');
  const k = Array.from(r);
  const res = [];

  for (let i = 0; i < k.length; i++) {
    const employees = {
      name: k[i].textContent,
      position: k[i].getAttribute('data-position'),
      salary: k[i].getAttribute('data-salary'),
      age: k[i].getAttribute('data-age'),
    };

    res.push(employees);
  }

  return res;
}

getEmployees(p);
