function parseSalary(salaryStr) {
  return parseFloat(salaryStr.replace(/\$/g, '').replace(/,/g, ''));
}

function sortList(list) {
  const listItems = Array.from(list.querySelectorAll('li'));

  listItems.sort((a, b) => {
    const salaryA = parseSalary(a.getAttribute('data-salary'));
    const salaryB = parseSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  listItems.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const listItems = Array.from(list.querySelectorAll('li'));

  return listItems.map((item) => ({
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: item.getAttribute('data-salary'),
    age: item.getAttribute('data-age'),
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul');

  sortList(list);

  getEmployees(list);
});
