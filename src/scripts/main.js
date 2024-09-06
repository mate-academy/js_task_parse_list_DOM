document.addEventListener('DOMContentLoaded', () => {
  const employeeList = document.querySelector('ul');

  function parseSalary(salaryStr) {
    return Number(salaryStr.replace(/[$,]/g, ''));
  }

  function sortList(list) {
    const items = Array.from(list.querySelectorAll('li'));

    items.sort(
      (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
    );

    items.forEach((item) => list.appendChild(item));
  }

  function getEmployees(list) {
    const items = Array.from(list.querySelectorAll('li'));

    return items.map((item) => ({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: Number(item.dataset.age),
    }));
  }

  sortList(employeeList);
  getEmployees(employeeList);
});
