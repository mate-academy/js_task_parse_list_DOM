'use strict';

const List = document.querySelectorAll('li');

function sortList(list) {
  const employees = [];
  const sortedList = [...list].sort((a, b) =>
    +b.attributes[1].value.replace(/[^\d]/g, '')
    - +a.attributes[1].value.replace(/[^\d]/g, ''));

  sortedList.map(li => {
    document.querySelector('ul').append(li);

    employees.push(
      {
        name: li.innerText.trim(),
        position: li.attributes[0].value,
        salary: li.attributes[1].value,
        age: li.attributes[2].value,
      }
    );
  });

  return employees;
}

sortList(List);
