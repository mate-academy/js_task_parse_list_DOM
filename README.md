1. Replace `<your_account>` with your Github username in the link
    - [DEMO LINK](https://<your_account>.github.io/js_task_parse_list_DOM/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)
    - Run `npm run test` command to test your code;
    - Run `npm run test:only -- -n` to run fast test ignoring linter;
    - Run `npm run test:only -- -l` to run fast test with additional info in console ignoring linter.

### Task: Parse list with data attributes

Hey there! Can you parse data from the list and sort it based on data attributes?

Привет! Можете ли вы анализировать данные из списка и сортировать их на основе атрибутов данных?

Your task: Sort list by salary in descending order.
Get an array of employees. Write two functions: 
- first, which sorts the list by salary from data attributes
- second, which returns an array of objects, where objects are employees.

Ваша задача: Отсортировать список по зарплате в порядке убывания.
Получите массив сотрудников. Напишите две функции:
- первый, который сортирует список по зарплате из атрибутов данных
- второй, который возвращает массив объектов, где объектами являются сотрудники.

The schema for the employee:
Схема для сотрудника:
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

Ожидаемый результат после заживления:

![Result](./src/images/result.png)

You can read about non-standard attributes and dataset [here](https://javascript.info/dom-attributes-and-properties#non-standard-attributes-dataset)

Вы можете прочитать о нестандартных атрибутах и ​​наборе данных
##### Steps to do this challenge:
1) Find and get a list from the document.
2) Create function `sortList`, which takes a `list` property, and sorts list items in descending order by salary from data attribute. (Salary from data attribute is a string, do not forget to convert it to number, write helper function for it). Append sorted items to list.
3) Create function `getEmployees`, which takes a `list` property, and returns an array of right objects.
4) Call both functions.
5) Done.
1) Найдите и получите список из документа.
2) Создайте функцию sortList, которая принимает свойство list и сортирует элементы списка в порядке убывания по зарплате из атрибута данных. (Зарплата из атрибута данных — это строка, не забудьте преобразовать ее в число, написать для нее вспомогательную функцию). Добавить отсортированные элементы в список.
3) Создайте функцию `getEmployees`, которая принимает свойство `list` и возвращает массив нужных объектов.
4) Вызвать обе функции.
5) Готово.

You don't need to change styles or HTML layout in this task. Change only `main.js` file.
В этой задаче вам не нужно менять стили или разметку HTML. Измените только файл `main.js`.
