'use strict';

function getEmployees(list) {
  if (!list) {
    return;
  }

  const employeesList = [...list.children].reduce((previous, item) => {
    previous.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });

    return previous;
  }, []);

  return employeesList;
}

function sortList(list) {
  if (!list) {
    return;
  }

  function numberExtractor(number) {
    return Number(
      number
        .split('')
        .filter((char) => !isNaN(Number(char)))
        .join(''),
    );
  }

  const employeesList = getEmployees(list);

  const sortedList = employeesList.sort((personOne, personTwo) => {
    return (
      numberExtractor(personTwo.salary) - numberExtractor(personOne.salary)
    );
  });

  for (let index = 0; index < sortedList.length; index++) {
    list.append(
      [...list.children].find((child) => {
        return child.innerText === sortedList[index].name;
      }),
    );
  }
}

sortList(document.querySelector('ul'));
