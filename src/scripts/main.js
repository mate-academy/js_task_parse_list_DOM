'use strict';

const workers = [...document.querySelectorAll('li')];

function sortList(list) {
  list.sort((a, b) =>
    salaryChenge(b.dataset.salary) - salaryChenge(a.dataset.salary));

  function salaryChenge(str) {
    return +str.substring(1).split(',').join('');
  }

  document.querySelector('ul').append(...workers);
}

function getWorkers(list) {
  return list.map(person => {
    return {
      name: person.innerText.trim(),
      ...person.dataset,
    };
  });
}

sortList(workers);
getWorkers(workers);
