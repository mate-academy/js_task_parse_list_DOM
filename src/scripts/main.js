const listItems = document.querySelectorAll('ul li');

function sortList(items) {
  const sortedItems = Array.from(items).sort((a, b) => {
    const salaryA = parseFloat(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = parseFloat(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  sortedItems.forEach((item) => {
    ul.appendChild(item);
  });
}

function getEmployees(items) {
  const employees = Array.from(items).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseFloat(item.dataset.salary.replace(/[$,]/g, '')),
    age: parseInt(item.dataset.age, 10),
  }));

  return employees;
}

sortList(listItems);

getEmployees(document.querySelectorAll('ul li'));
