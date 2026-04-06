const listElement = document.querySelector('ul');

function parseSalary(string) {
  const result = string.replaceAll('$', '').replaceAll(',', '');
  return +result;
}

function sortList(list) {
  const childrenArray = [...list.children];

  childrenArray.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);
    return salaryB - salaryA;
  });

  list.append(...childrenArray);
}

function getEmployees(list) {
  return [...list].map(item => {
    return {
      name: item.innerText.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: +item.dataset.age
    };
  });
}

sortList(listElement);
getEmployees(listElement.children);
