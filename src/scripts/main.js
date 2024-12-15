'use strict';

// write code here

const list = document.querySelectorAll('li');
const container = document.querySelector('ul');

container.innerHTML = '';

const emplList = getEmployees(sortList(list));

for (const i of emplList) {
  const li = document.createElement('li');

  li.setAttribute('data-position', i['data-position']);
  li.setAttribute('data-salary', i['data-salary']);
  li.setAttribute('data-age', i['data-age']);
  li.innerText = i.name;
  container.appendChild(li);
}

function sortList(ls) {
  const sortedLst = [...ls].sort((a, b) => {
    const fS = parseFloat(a.getAttribute('data-salary').replace(/[$,]/g, ''));
    const sS = parseFloat(b.getAttribute('data-salary').replace(/[$,]/g, ''));

    return sS - fS;
  });

  return sortedLst;
}

function getEmployees(ls) {
  const empl = [];

  for (let i = 0; i < ls.length; i++) {
    empl[i] = {};
    empl[i].id = i;
    empl[i]['data-position'] = ls[i].getAttribute('data-position');
    empl[i]['data-salary'] = ls[i].getAttribute('data-salary');
    empl[i]['data-age'] = ls[i].getAttribute('data-age');
    empl[i].name = ls[i].innerText.trim();
  }

  return empl;
}
