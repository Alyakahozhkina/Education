//#1
const blockFirst = document.querySelector('.first-task .block');
const stopBtn = document.querySelector('.stop-block');

let length = 0;
let timer;

const moveBlock = () => {
  timer = setInterval(() => {
    if(length >= document.documentElement.clientWidth - 110) {
      length = 0;
    }
    length += 5;
    blockFirst.style.left = `${length}px`;
  }, 30);
  blockFirst.removeEventListener('click', moveBlock);
}
const stopBlock = () => {
  clearInterval(timer);
  blockFirst.addEventListener('click', moveBlock);
}

blockFirst.addEventListener('click', moveBlock);
stopBtn.addEventListener('click', stopBlock);

//#2
const blockSecond = document.querySelector('.second-task .block');
const toggleLink = document.querySelector('.toggle-link');
const removeBtn = document.querySelector('.remove-click');

document.addEventListener('DOMContentLoaded', () => {
  blockSecond.classList.remove('hidden');
});

const toggleHiddenClass = () => {
  blockSecond.classList.toggle('hidden');
}

toggleLink.addEventListener('click', toggleHiddenClass);
removeBtn.addEventListener('click', () => {toggleLink.removeEventListener('click', toggleHiddenClass);
})

//#3
const dateBlock = document.querySelector('.third-task .date');

const daysOfTheWeek = {1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat', 7: 'Sun'};

const dateCurrent = new Date().getDay();
const dateCorrect = dateCurrent === 0 ? 7 : dateCurrent;

dateBlock.innerHTML += `${dateCorrect} - ${daysOfTheWeek[dateCorrect]}`

//#4
const list = document.querySelector('.fourth-task .text-list')

const getPhrase = () => {
  const text = prompt('Please write a phrase');
  if (!text) {
    getPhrase();
  } else {
    const textSplit = text.split(' ');
    textSplit.forEach((elem, index) => {
      const li = document.createElement('li');
      if(index === 0) {
        li.innerHTML = elem.toUpperCase();
      } else if (index === textSplit.length - 1 || index === textSplit.length - 2) {
        li.innerHTML = elem.toLowerCase();
      } else {
        li.innerHTML = elem;
      }
      list.appendChild(li);
    })
    alert(`The number of A letters -  ${text.match(/a/gi).length}`);
  }
}

getPhrase();