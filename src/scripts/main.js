const employesList = [];

function sortList() {
  let salary = document.querySelectorAll('li[data-salary]');

  salary.forEach(function (item) {
    const employerName = item.textContent.trim();

    salaryEmployer = item.dataset.salary;

    const position = item.dataset.position;
    const age = item.dataset.age;

    let deleteDollar = salaryEmployer.replace('$', '');

    deleteDollar = Number(deleteDollar.replace(',', ''));

    const newSalary = (item.dataset.salary = deleteDollar);
    const employes = {
      employerName: employerName,
      position: position,
      salary: newSalary,
      age: age,
    };

    employesList.push(employes);
  });

  return employesList;
}

const employesArray = sortList();

employesArray.sort((a, b) => b.salary - a.salary);

function getEmployes() {
  let count = 0;

  document.querySelectorAll('li').forEach(function (item) {
    item.dataset.salary = employesArray[count].salary;
    item.dataset.position = employesArray[count].position;
    item.dataset.age = employesArray[count].age;
    item.textContent = employesArray[count].employerName;
    count++;
  });
}
getEmployes();
