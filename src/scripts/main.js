document.addEventListener('DOMContentLoaded', () => {
  const employeeList = document.querySelector('ul');

  function parseSalary(salaryStr) {
    return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
  }

  function sortList(list) {
    const items = Array.from(list.children);

    items.sort(
      (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
    );
    items.forEach((item) => list.appendChild(item));
  }

  function getEmployees(list) {
    return Array.from(list.children).map((item) => ({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: Number(item.dataset.age),
    }));
  }

  sortList(employeeList);
  getEmployees(employeeList);
});
