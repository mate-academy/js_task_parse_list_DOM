1. Replace `<your_account>` with your Github username in the link
    - [DEMO LINK](https://<your_account>.github.io/js_task_parse_list_DOM/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)
    - Run `npm run test` command to test your code;
    - Run `npm run test:only -- -n` to run fast test ignoring linter;
    - Run `npm run test:only -- -l` to run fast test with additional info in console ignoring linter.

### Task: Parse list with data attributes

Hey there! Can you parse data from the list and sort it based on data attributes?

Your task: Sort list by salary in descending order.
Get an array of employees. Write two functions:
- first, which sorts the list by salary from data attributes
- second, which returns an array of objects, where objects are employees.

The schema for the employee:
```
{
  name,
  position,
  salary,
  age
}
```

Employees list:

![Preview](./src/images/preview.png)

Expected result after soring:

![Result](./src/images/result.png)

You can read about non-standard attributes and dataset [here](https://javascript.info/dom-attributes-and-properties#non-standard-attributes-dataset)

##### Steps to do this challenge:
1) Знайдіть і отримайте список із документа.
2) Створіть функцію `Sortlist`, яка бере властивість" Список ", і сортує список елементів у порядку зниження за допомогою зарплати від атрибута даних.(Заробітна плата від атрибута даних - це рядок, не забудьте перетворити його на номер, запишіть для нього функцію помічників).Додайте відсортовані елементи до списку.
3) Створіть функцію `getEmployees`, яка приймає властивість" список ", і повертає масив правильних об'єктів.
4) Викликайте обидві функції.
5) зроблено.

You don't need to change styles or HTML layout in this task. Change only `main.js` file.
