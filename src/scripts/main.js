function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);
  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = Array.from(list.children);
  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('#employees');
  if (list) {
    sortList(list);
    const employees = getEmployees(list);
    console.log(employees);
  }
});
