'use strict';
const list = document.querySelector('ul');

  function getSalary(item) {
  return Number(
    item.dataset.salary
      .replace(/[S,]/g, '')
  );
}

  function sortList(list) {
    const items = [...list.children];

    items.sort((a, b) => {
      return getSalary(b) - getSalary(a)
    });

    list.append(...items);

  }

  function getEmployees(list) {
    const items = [...list.children];

    return items.map(item => ({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: getSalary(item),
      age: Number(item.dataset.age)

    }))

    sortList(list);

    const employees = getEmployees(list);

    console.log(getEmployees);


  }

