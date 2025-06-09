document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul');

  function parseSalary(salaryStr) {
    return parseFloat(salaryStr.replace(/[$,]/g, ''));
  }

  function sortList(targetList) {
    const items = Array.from(targetList.children);

    items.sort((a, b) => {
      const salaryA = parseSalary(a.dataset.salary);
      const salaryB = parseSalary(b.dataset.salary);

      return salaryB - salaryA;
    });

    targetList.innerHTML = '';
    items.forEach((item) => targetList.appendChild(item));
  }

  function getEmployees(targetList) {
    return Array.from(targetList.children).map((li) => ({
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: parseInt(li.dataset.age, 10),
    }));
  }

  sortList(list);

  getEmployees(list);
});
