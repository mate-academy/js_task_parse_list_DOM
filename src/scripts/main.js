'use strict';

const ul = document.querySelector('ul');

function convertToNumber(variable) {
  [...variable.children].map(item => {
    item.dataset.salary = item.dataset.salary.slice(1).replace(',', '.');
  });
};

function sortList(variable) {
  const arr
  = [...ul.children].sort((a, b) => b.dataset.salary - a.dataset.salary);

  variable.append(...arr);
}

function getEmployees(variable) {
  const answer = [...variable.children].map(item => {
    const salary = `$${(item.dataset.salary.replace('.', ','))}`;

    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: salary,
      age: item.dataset.age,
    };
  });

  return answer;
}

convertToNumber(ul);

sortList(ul);

getEmployees(ul);
