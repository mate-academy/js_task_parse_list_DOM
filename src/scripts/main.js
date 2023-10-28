'use strict';

const list = document.querySelector('ul');

function sortList(list) {
  const listItems = Array.from(list.children);

  let sortedList = listItems.sort((item1, item2) => {
    let salary1 = item1.getAttribute('data-salary');
    let salary2 = item2.getAttribute('data-salary');
    const pattern = /[\,\.\$]/gi;

    salary1 = salary1.replace(pattern, '');
    salary2 = salary2.replace(pattern, '');

    return salary2 - salary1;
  });

  list.innerHTML = '';

  listItems.forEach(item => {
    list.appendChild(item);
  });
}

function getEmployees(list) {
  const listItems = Array.from(list.children)
    .map(item => {
      const name = item.innerHTML.trim();
      const position = item.getAttribute('data-position');
      const salary = item.getAttribute('data-salary');
      const age = item.getAttribute('data-age');

      return {
        name, 
        position,
        salary,
        age
      }
    });

  return listItems;
}

sortList(list);
getEmployees(list);
