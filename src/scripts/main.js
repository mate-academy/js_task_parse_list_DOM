'use strict';

const emploerList = document.querySelector('ul');

function parsSalary(strSalary) {
  return Number(strSalary.replace(/[$,]/g, ''));
}

function sortList(list) {
  const employers = list.querySelectorAll('li');

  const emploerRatting = [...employers].sort((a, b) => {
    const aSalary = parsSalary(a.getAttribute('data-salary'));
    const bSalary = parsSalary(b.getAttribute('data-salary'));

    return bSalary - aSalary;
  });

  emploerRatting.forEach((emploer) => list.append(emploer));
}

function getEmployees(list) {
  const informationPeople = [];
  const peopleList = list.querySelectorAll('li');

  [...peopleList].forEach((emploer) => {
    const emploerInfo = {
      name: emploer.textContent.trim(),
      position: emploer.getAttribute('data-position'),
      salary: parsSalary(emploer.getAttribute('data-salary')),
      age: Number(emploer.getAttribute('data-age')),
    };

    informationPeople.push(emploerInfo);
  });

  return informationPeople;
}

sortList(emploerList);
getEmployees(emploerList);
