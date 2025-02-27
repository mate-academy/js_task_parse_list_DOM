function parseSalary(salaryString) {
  return parseInt(salaryString, 10);
}

function sortList(list) {
  const sortedList = Array.from(list).sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  sortedList.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const employees = Array.from(list).map((item) => {
    return {
      name: item.dataset.name,
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: item.dataset.age,
    };
  });

  return employees;
}

document.addEventListener('DOMContentLoaded', function () {
  const employeeList = document.querySelectorAll('.employee');

  sortList(employeeList);

  const employees = getEmployees(employeeList);

  alert(JSON.stringify(employees, null, 2));
});
