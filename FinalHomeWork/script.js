'use strict';

// #1. Дан массив с числами. Найдите сумму
// последних N элементов до первого нуля с конца.

let arr1 = [1, 2, 3, 4, 0, 1, 3, 5];
let sum = 0;

for (let i = arr1.length-1; i >= 0; i--) {
    if (arr1[i] !== 0) {
        sum += arr1[i];
    } else {
        break;
    }
}
 console.log(sum)


// #2. Функция ggg принимает 2 параметра: анонимную функцию, которая возвращает
// 3 и анонимную функцию, которая возвращает 4. Верните результатом функции ggg сумму 3 и 4.

const ggg = (func1, func2) => {
    return func1() + func2();
}

console.log(ggg(
    function() {
        return 3;
    },
    function() {
        return 4;
    }
))

// #3. Напишите функцию под названием divide, которая принимает два
// параметра:Числитель и знаменатель. Функция возвращает результат
// числитель/знаменатель. Если знаменатель равен 0, или оба параметра равны
// строке/undefined. Выбросить исключение.

const divide = (num1, num2) => {
    if (num2 === 0 || typeof num1 === 'undefined' || typeof num2 === 'undefined' || typeof num1 === 'string' || typeof num2 === 'string') {
        throw new Error('Divide error');
    } else {
        return num1 / num2;
    }
}
console.log(divide(1, 2));

// #4. Для заданной строки перепишите в
// обратном порядке слова нечетной длины.
// Слова четной длины – не изменяются.

const reverseOdd = (str) => {
    return str.split (' ').map((word) => {
        return word.length % 2 !== 0 ? word.split('').reverse().join('') : word;
    }).join(' ');
}
console.log(reverseOdd('Trust the process quotes meaning'));

// #5. Реализуйте класс Student (Студент), который будет
// наследовать от класса User.

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
    getFullName () {
        return this.name + ' ' + this.surname;
    }
}

class Student extends User{
  constructor(name, surname, startYear) {
    super(name, surname);
    this.startYear = startYear;
    this.nowYear = new Date().getFullYear();
  }
    getCourse() {
        return this.nowYear - this.startYear;
    }
}

const student = new Student('Oleh', 'Ivanov', 2020);
console.log(student.getFullName())
console.log(student.getCourse())

// #6. Сделайте функцию, которая считает и
// выводит количество своих
// вызовов(замыкания)

const test1 = () => {
	let num = 0;

	return function() {
		console.log(++num);
	}
}
const func = test1();
func();
func();
func();
func();

// #7.
const test2 = () => {
    const arrRandomNumbers = [];
    return function randomNumber () {
        const random = parseFloat(Math.floor(Math.random() * 100) + 1);
        if(arrRandomNumbers.find((elem) => elem === random)) {
            return randomNumber()
        } else {
            arrRandomNumbers.push(random);
            return random;
        }
    }
}

const random = test2();
console.log(random());
console.log(random());
console.log(random());

// #8. Даны дивы. По первому нажатию на каждый див он красится красным
// фоном, по второму красится обратно и так далее каждый клик происходит
// чередование фона. Сделайте так, чтобы было две функции: одна красит
// в красный цвет, другая в зеленый и они сменяли друг друга через removeEventListener

const eightTaskBlocks = document.querySelectorAll('.eight-task .block');

const redColor = (e) => {
  const { target } = e;

  if(target.tagName === 'DIV') {
    if(target.className === 'block red-bg') {
      target.removeEventListener('click', redColor);
      target.addEventListener('click', greenColor);
    }
    target.classList.toggle('red-bg');
  }
}

const greenColor = (e) => {
  const { target } = e;

  if(target.tagName === 'DIV') {
    if(target.className === 'block green-bg') {
      target.removeEventListener('click', greenColor);
      target.addEventListener('click', redColor);
    }
    target.classList.toggle('green-bg');
  }
}


eightTaskBlocks.forEach((block) => {
  block.addEventListener('click', redColor);
})


// #9. Сделайте цепочку из трех промисов. Пусть первый промис возвращает
// число. Сделайте так, чтобы каждый последующий промис через 3 секунды
// возводил в квадрат результат предыдущего промиса. После
// окончания манипуляций выведите число алертом на экран.

const nineTask = (number) => {
  new Promise((resolve) => {
    setTimeout(() => resolve(number), 3000);

  }).then((result) => {
    new Promise((resolve) => {
      setTimeout(() => resolve(result * result), 3000);

    }).then((result) => {
      new Promise((resolve) => {
        setTimeout(() => resolve(result * result), 3000);

      }).then((result) => alert(result));
    });
  });
};

nineTask(2);

// #10. Модифицируйте: Модифицируйте задачу так, чтобы
// один из промисов в цепочке выполнился с ошибкой. В конце
// цепочки расположите метод catch, который поймает эту ошибку.

const tenTask = (number) => {
  new Promise((resolve) => {
    setTimeout(() => resolve(number), 3000);

  }).then((result) => {
    new Promise((resolve) => {
      setTimeout(() => resolve(result * result), 3000);

    }).then((result) => {
      new Promise((resolve) => {
        setTimeout(() => resolve(result * result), 3000);
        throw new Error('Promise error')

      }).then((result) => alert(result)).catch((err) => alert(err));
    });
  });
};

tenTask(2);

// #12. Создайте инпут, в который
// пользователь вводит дату своего рождения в формате '2014-12-31' (с
// конкретным годом). По потери фокуса выведите под инпутом сколько
// дней осталось до его дня рождения. Воспользуйтесь методом Date.parse.



//#13. Дан массив с числами. Оставьте в нем только положительные числа. Затем
// извлеките квадратный корень и этих чисел

const arr = [-1, 2, -4, 5, 6];

const getSqrt = (arr) => {
  const newPositiveArr = arr.filter((elem) => elem > 0);

  return newPositiveArr.map((elem) => Math.sqrt(elem));

}
console.log(getSqrt(arr));

//#14. Сделайте промис, который через 5
// секунд случайным образом выполнится или с успехом, или с
// ошибкой. Примените изученныйметод catch для отлавливания ошибок.

const fourtheenTask = (bool) => {
  new Promise((resolve, reject) => {
    bool ? resolve('true') : reject('false');
  }).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
}

fourtheenTask(true);
fourtheenTask(false);

//#15. Даны кнопки. Каждая кнопка по
// нажатию на нее выводить следующее число Фибоначчи. Кнопки работают
// независимо. Решить через замыкания.

const fifthteenTaskBlock = document.querySelector('.fifthteen-task');
const fifthteenTaskNumber = document.querySelector('.fifthteen-task .number');

const fifthteenTask = () => {
	let prev = 0;
  let next = 1;
	return function() {
    let newNum = prev + next;
    prev = next;
    next = newNum
		return newNum;
	}
}
const newNum = fifthteenTask();

fifthteenTaskBlock.addEventListener('click', ({target: {tagName}}) => {
  if(tagName === 'BUTTON') {
    fifthteenTaskNumber.innerHTML = `${newNum()}`;
  }
})

//#16. На странице расположено несколько форм. В них есть инпуты, в инпутах
// числа. Дана кнопка. По нажатию на эту кнопку циклом переберите все
// формы на странице, затем циклом переберите все инпуты в каждой
// форме и найдите сумму чисел из всех этих инпутов.

const sixteenTaskForm = document.querySelectorAll('.sixteen-task form');
const sixteenTaskNumber = document.querySelector('.sixteen-task .number');
const sixteenTaskButton = document.querySelector('.sixteen-task .button');

sixteenTaskButton.addEventListener('click', () => {
  let num = 0;
  sixteenTaskForm.forEach(({ children }) => {
    for(let input of children) {
      num += +input.value;
    }
  })
  sixteenTaskNumber.innerHTML = `${num}`;
})

//#17 - 18. Разработайте функцию-конструктор,
// которая будет создавать объект Human(человек) создайте массив
// объектов и реализуйте функцию, которая будет сортировать элементы
// массива по значению свойства Age по возрастанию или по убыванию.
// Разработайте функцию-конструктор, которая будет создавать объект
// Human(человек) добавьте на свое усмотрение свойства и методы в этот
// объект. Подумайте какие методы и свойства следует сделать уровня
// экземпляра, а какие уровня функции-конструктора.


function Human(name, surname, profession, age) {
  this.name = name;
  this.surname = surname;
  this.profession = profession;
  this.age = age;

  this.getAge = () => {
    return this.age;
  }
}

let Marta = new Human('Marta',  'Stewart','business lady', 42);
let Ben  = new Human('Ben',  'Franklin', 'president', 56);
let Martin = new Human('Martin', 'Luther King', 'activist',  37);
let People = [Marta, Ben, Martin];

console.log(People.sort((a, b) => {
  return a.getAge() - b.getAge();
}));