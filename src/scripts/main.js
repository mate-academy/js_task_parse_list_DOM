const list = document.querySelector('ul');

const toNumber = (salary) => Number(salary.replace(/[$,]/g, ''));

function sortList(listElement) {
  const items = [...listElement.children];

  items.sort(
    (first, second) =>
      toNumber(second.dataset.salary) - toNumber(first.dataset.salary),
  );

  items.forEach((item) => listElement.append(item));
}

function getEmployees(listElement) {
  return [...listElement.children].map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: Number(item.dataset.age),
  }));
}

sortList(list);
getEmployees(list);
