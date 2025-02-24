function convertSalaryToNumber(salaryString) {
  return Number(salaryString.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = convertSalaryToNumber(a.getAttribute('data-salary'));
    const salaryB = convertSalaryToNumber(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = Array.from(list.children);

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: convertSalaryToNumber(item.getAttribute('data-salary')),
    age: Number(item.getAttribute('data-age')),
  }));
}

const employeeList = document.querySelector('ul');

sortList(employeeList);

const employeesArray = getEmployees(employeeList);

// eslint-disable-next-line no-console
console.log('Sorted List:', employeeList);

// eslint-disable-next-line no-console
console.log('Employees Array:', employeesArray);
