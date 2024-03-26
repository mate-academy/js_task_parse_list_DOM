'use strict';

// write code here
function sortConvert(listElements) {
  return listElements.sort((a, b) => {
    function convert(listItem) {
      return +listItem.dataset.salary.replace('$', '').replace(',', '');
    }

    return convert(b) - convert(a);
  });
}

function getEmployees(listElements) {
  const list = document.querySelector('ul');

  listElements.forEach((element) => {
    list.appendChild(element);
  });
}

getEmployees(sortConvert([...document.querySelectorAll('li')]));
