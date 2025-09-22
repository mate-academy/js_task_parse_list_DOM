function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/\D/g, ''));
}

const employeeList = document.querySelector('ul');

function sortList(listElement) {
  const items = Array.from(listElement.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => listElement.appendChild(item));
}

function getEmployees(listElement) {
  const items = listElement.querySelectorAll('li');

  return Array.from(items).map((li) => ({
    name: li.querySelector('strong').textContent.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

sortList(employeeList);

const employees = getEmployees(employeeList);
const pre = document.createElement('pre');

pre.textContent = JSON.stringify(employees, null, 2);
