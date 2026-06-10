const ul = document.querySelector('ul');

function getSalaryAsNumber(salaryStr) {
  if (!salaryStr) {
    return 0;
  }

  return Number(salaryStr.replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = list.querySelectorAll('li');
  const itemsArray = Array.from(items);

  itemsArray.sort((a, b) => {
    const salaryA = a.dataset.salary;
    const salaryB = b.dataset.salary;

    return getSalaryAsNumber(salaryB) - getSalaryAsNumber(salaryA);
  });

  list.append(...itemsArray);
}

function getEmployees(list) {
  const items = list.querySelectorAll('li');
  const itemsArray = Array.from(items);

  const employees = itemsArray.map((li) => {
    const name1 = li.textContent.trim();
    const position = li.dataset.position;
    const salary = getSalaryAsNumber(li.dataset.salary);
    const age = Number(li.dataset.age);

    return {
      name: name1,
      position: position,
      salary: salary,
      age: age,
    };
  });

  return employees;
}

sortList(ul);

// eslint-disable-next-line no-unused-vars
const employeesList = getEmployees(ul);
