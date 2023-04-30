
const keysList = [
  {
    title: '`',
    class: 'button_short',
  },
  {
    title: 1,
    class: 'button_short',
  },
  {
    title: 2,
    class: 'button_short',
  },
  {
    title: 3,
    class: 'button_short',
  },
  {
    title: 4,
    class: 'button_short',
  },
  {
    title: 5,
    class: 'button_short',
  },
  {
    title: 6,
    class: 'button_short',
  },
  {
    title: 7,
    class: 'button_short',
  },
  {
    title: 8,
    class: 'button_short',
  },
  {
    title: 9,
    class: 'button_short',
  },
  {
    title: 0,
    class: 'button_short',
  },
  {
    title: '-',
    class: 'button_short',
  },
  {
    title: '=',
    class: 'button_short',
  },
  {
    title: 'Backspace',
    class: 'button_long',
  },
  {
    title: 'Tab',
    class: 'button_middle',
  },
  {
    title: 'Q',
    class: 'button_short',
  },
  {
    title: 'W',
    class: 'button_short',
  },
  {
    title: 'E',
    class: 'button_short',
  },
  {
    title: 'R',
    class: 'button_short',
  },
  {
    title: 'T',
    class: 'button_short',
  },
  {
    title: 'Y',
    class: 'button_short',
  },
  {
    title: 'U',
    class: 'button_short',
  },
  {
    title: 'I',
    class: 'button_short',
  },
  {
    title: 'O',
    class: 'button_short',
  },
  {
    title: 'P',
    class: 'button_short',
  },
  {
    title: '[',
    class: 'button_short',
  },
  {
    title: ']',
    class: 'button_short',
  },
  {
    title: '\\',
    class: 'button_short',
  },
  {
    title: 'Del',
    class: 'button_short',
  },
  {
    title: 'Caps Lock',
    class: 'button_long',
  },
  {
    title: 'A',
    class: 'button_short',
  },
  {
    title: 'S',
    class: 'button_short',
  },
  {
    title: 'D',
    class: 'button_short',
  },
  {
    title: 'F',
    class: 'button_short',
  },
  {
    title: 'A',
    class: 'button_short',
  },
  {
    title: 'G',
    class: 'button_short',
  },
  {
    title: 'H',
    class: 'button_short',
  },
  {
    title: 'J',
    class: 'button_short',
  },
  {
    title: 'K',
    class: 'button_short',
  },
  {
    title: 'L',
    class: 'button_short',
  },
  {
    title: ';',
    class: 'button_short',
  },
  {
    title: "'",
    class: 'button_short',
  },
  {
    title: 'ENTER',
    class: 'button_long',
  },
]

const body = document.querySelector('body');

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
body.prepend(wrapper);

const divWindow = document.createElement('div');
divWindow.className = 'block-window';
wrapper.prepend(divWindow);

const divMain = document.createElement('div');
divMain.className = 'main';
wrapper.append(divMain);




const divRow1 = document.createElement('div');
divRow1.className = 'row';
divMain.prepend(divRow1);

for(let i = 0; i < 14; i++) {
  let button = document.createElement('button');
  button.className = keysList[i].class;
  divRow1.appendChild(button);
  button.textContent = keysList[i].title;
  button.setAttribute('id',`${keysList[i].title}`)
}

const divRow2 = document.createElement('div');
divRow2.className = 'row';
divMain.append(divRow2);

for(let i = 14; i < 29; i++) {
  let button = document.createElement('button');
  button.className = keysList[i].class;
  divRow2.appendChild(button);
  button.textContent = keysList[i].title;
}

const divRow3 = document.createElement('div');
divRow3.className = 'row';
divMain.append(divRow3);

for(let i = 29; i < 43; i++) {
  let button = document.createElement('button');
  button.className = keysList[i].class;
  divRow3.appendChild(button);
  button.textContent = keysList[i].title;
}


//GETTING NUMBER OF KEY FOR ANIMATION
let numberId;
let butt = document.querySelectorAll('.button_short');

butt.forEach(element => {
  element.addEventListener('click', showTargets);
});


function showTargets(e) {
  numberId = e.target.closest('button').getAttribute('id');
  console.log(numberId);
  let span = document.createElement('span');
  divWindow.append(span);
  span.textContent = numberId;
  butt.classList.toggle('active');
}
