'use strict';

const persons = [...document.querySelector('ul').querySelectorAll('li')];

// helpful function
function formatToValue(string) {
  return string.replaceAll('$', '').replaceAll(',', '');
}

function sortList(list) {
  list.sort((personA, personB) => {
    const x = Number(formatToValue(personA.dataset.salary));
    const y = Number(formatToValue(personB.dataset.salary));

    return y - x;
  });

  // Formating web content by sorted peoples
  list.forEach((node) => {
    const ulBlock = document.querySelector('ul');

    ulBlock.append(node);
  });
}

function getEmployees(list) {
  const result = list.map((node) => {
    return {
      name: node.textContent.trim(),
      position: node.dataset.position,
      salary: node.dataset.salary,
      age: node.dataset.age,
    };
  });

  return result;
}

sortList(persons);
getEmployees(persons);
