const employeeListItems = document.querySelectorAll('ul li');

function getSalary(salaryString) {
  return parseInt(salaryString.replace(/[$,]/g, ''), 10);
}

function sortList(listItems) {
  const sortedList = Array.from(listItems).sort((a, b) => {
    return (
      getSalary(b.getAttribute('data-salary')) -
      getSalary(a.getAttribute('data-salary'))
    );
  });

  const ul = document.querySelector('ul');

  ul.innerHTML = '';
  sortedList.forEach((li) => ul.appendChild(li));
}

function getEmployees(listItems) {
  return Array.from(listItems).map((li) => ({
    name: li.textContent.trim(),
    position: li.getAttribute('data-position'),
    salary: getSalary(li.getAttribute('data-salary')),
    age: parseInt(li.getAttribute('data-age'), 10),
  }));
}

sortList(employeeListItems);
getEmployees(employeeListItems);
