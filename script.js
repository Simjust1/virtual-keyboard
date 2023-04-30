let lang = 'en';

const keysList = [
  //первый массив - клавиши в латинице
  [
    {
      title: '`',
      class: 'button button button_short',
    },
    {
      title: 1,
      class: 'button button_short',
    },
    {
      title: 2,
      class: 'button button_short',
    },
    {
      title: 3,
      class: 'button button_short',
    },
    {
      title: 4,
      class: 'button button_short',
    },
    {
      title: 5,
      class: 'button button_short',
    },
    {
      title: 6,
      class: 'button button_short',
    },
    {
      title: 7,
      class: 'button button_short',
    },
    {
      title: 8,
      class: 'button button_short',
    },
    {
      title: 9,
      class: 'button button_short',
    },
    {
      title: 0,
      class: 'button button_short',
    },
    {
      title: '-',
      class: 'button button_short',
    },
    {
      title: '=',
      class: 'button button_short',
    },
    {
      title: 'Backspace',
      class: 'button button_long',
    },
    {
      title: 'Tab',
      class: 'button button_middle',
    },
    {
      title: 'Q',
      class: 'button button_short',
    },
    {
      title: 'W',
      class: 'button button_short',
    },
    {
      title: 'E',
      class: 'button button_short',
    },
    {
      title: 'R',
      class: 'button button_short',
    },
    {
      title: 'T',
      class: 'button button_short',
    },
    {
      title: 'Y',
      class: 'button button_short',
    },
    {
      title: 'U',
      class: 'button button_short',
    },
    {
      title: 'I',
      class: 'button button_short',
    },
    {
      title: 'O',
      class: 'button button_short',
    },
    {
      title: 'P',
      class: 'button button_short',
    },
    {
      title: '[',
      class: 'button button_short',
    },
    {
      title: ']',
      class: 'button button_short',
    },
    {
      title: '\\',
      class: 'button button_short',
    },
    {
      title: 'Del',
      class: 'button button_middle',
    },
    {
      title: 'Caps Lock',
      class: 'button button_middle',
    },
    {
      title: 'A',
      class: 'button button_short',
    },
    {
      title: 'S',
      class: 'button button_short',
    },
    {
      title: 'D',
      class: 'button button_short',
    },
    {
      title: 'F',
      class: 'button button_short',
    },
    {
      title: 'G',
      class: 'button button_short',
    },
    {
      title: 'H',
      class: 'button button_short',
    },
    {
      title: 'J',
      class: 'button button_short',
    },
    {
      title: 'K',
      class: 'button button_short',
    },
    {
      title: 'L',
      class: 'button button_short',
    },
    {
      title: ';',
      class: 'button button_short',
    },
    {
      title: "'",
      class: 'button button_short',
    },
    {
      title: 'ENTER',
      class: 'button button_long',
    },


    {
      title: 'Shift',
      class: 'button button_middle',
    },
    {
      title: '\\',
      class: 'button button_short',
    },
    {
      title: 'Z',
      class: 'button button_short',
    },
    {
      title: 'X',
      class: 'button button_short',
    },
    {
      title: 'C',
      class: 'button button_short',
    },
    {
      title: 'V',
      class: 'button button_short',
    },
    {
      title: 'B',
      class: 'button button_short',
    },
    {
      title: 'N',
      class: 'button button_short',
    },
    {
      title: 'M',
      class: 'button button_short',
    },
    {
      title: ',',
      class: 'button button_short',
    },
    {
      title: '.',
      class: 'button button_short',
    },
    {
      title: "/",
      class: 'button button_short',
    },
    {
      title: 'Shift',
      class: 'button button_long',
    },

    {
      title: 'Ctl',
      class: 'button button_middle',
    },
    {
      title: 'Win',
      class: 'button button_short',
    },
    {
      title: 'Alt',
      class: 'button button_short',
    },
    {
      title: '',
      class: 'button button_longest',
    },
    {
      title: 'Alt',
      class: 'button button_short',
    },
    {
      title: 'Ctl',
      class: 'button button_short',
    },
    {
      title: '<',
      class: 'button button_short',
    },
    {
      title: '?',
      class: 'button button_short',
    },
    {
      title: '>',
      class: 'button button_short',
    },
  ],
//второй массив - клавиши в кирилице
  [
  {
    title: '`',
    class: 'button button button_short',
  },
  {
    title: 1,
    class: 'button button_short',
  },
  {
    title: 2,
    class: 'button button_short',
  },
  {
    title: 3,
    class: 'button button_short',
  },
  {
    title: 4,
    class: 'button button_short',
  },
  {
    title: 5,
    class: 'button button_short',
  },
  {
    title: 6,
    class: 'button button_short',
  },
  {
    title: 7,
    class: 'button button_short',
  },
  {
    title: 8,
    class: 'button button_short',
  },
  {
    title: 9,
    class: 'button button_short',
  },
  {
    title: 0,
    class: 'button button_short',
  },
  {
    title: '-',
    class: 'button button_short',
  },
  {
    title: '=',
    class: 'button button_short',
  },
  {
    title: 'Backspace',
    class: 'button button_long',
  },
  {
    title: 'Tab',
    class: 'button button_middle',
  },
  {
    title: 'Й',
    class: 'button button_short',
  },
  {
    title: 'Ц',
    class: 'button button_short',
  },
  {
    title: 'У',
    class: 'button button_short',
  },
  {
    title: 'К',
    class: 'button button_short',
  },
  {
    title: 'Е',
    class: 'button button_short',
  },
  {
    title: 'Н',
    class: 'button button_short',
  },
  {
    title: 'Г',
    class: 'button button_short',
  },
  {
    title: 'Ш',
    class: 'button button_short',
  },
  {
    title: 'Щ',
    class: 'button button_short',
  },
  {
    title: 'З',
    class: 'button button_short',
  },
  {
    title: 'Х',
    class: 'button button_short',
  },
  {
    title: 'Ъ',
    class: 'button button_short',
  },
  {
    title: '\\',
    class: 'button button_short',
  },
  {
    title: 'Del',
    class: 'button button_middle',
  },
  {
    title: 'Caps Lock',
    class: 'button button_middle',
  },
  {
    title: 'Ф',
    class: 'button button_short',
  },
  {
    title: 'Ы',
    class: 'button button_short',
  },
  {
    title: 'В',
    class: 'button button_short',
  },
  {
    title: 'А',
    class: 'button button_short',
  },
  {
    title: 'П',
    class: 'button button_short',
  },
  {
    title: 'Р',
    class: 'button button_short',
  },
  {
    title: 'О',
    class: 'button button_short',
  },
  {
    title: 'Л',
    class: 'button button_short',
  },
  {
    title: 'Д',
    class: 'button button_short',
  },
  {
    title: 'Ж',
    class: 'button button_short',
  },
  {
    title: "Э",
    class: 'button button_short',
  },
  {
    title: 'ENTER',
    class: 'button button_long',
  },

  {
    title: 'Shift',
    class: 'button button_middle',
  },
  {
    title: '\\',
    class: 'button button_short',
  },
  {
    title: 'Я',
    class: 'button button_short',
  },
  {
    title: 'Ч',
    class: 'button button_short',
  },
  {
    title: 'С',
    class: 'button button_short',
  },
  {
    title: 'М',
    class: 'button button_short',
  },
  {
    title: 'И',
    class: 'button button_short',
  },
  {
    title: 'Т',
    class: 'button button_short',
  },
  {
    title: 'Ь',
    class: 'button button_short',
  },
  {
    title: 'Б',
    class: 'button button_short',
  },
  {
    title: 'Ю',
    class: 'button button_short',
  },
  {
    title: "/",
    class: 'button button_short',
  },
  {
    title: 'Shift',
    class: 'button button_long',
  },

  {
    title: 'Ctl',
    class: 'button button_middle',
  },
  {
    title: 'Win',
    class: 'button button_short',
  },
  {
    title: 'Alt',
    class: 'button button_short',
  },
  {
    title: ' ',
    class: 'button button_longest',
  },
  {
    title: 'Alt',
    class: 'button button_short',
  },
  {
    title: 'Ctl',
    class: 'button button_short',
  },
  {
    title: '<',
    class: 'button button_short',
  },
  {
    title: '?',
    class: 'button button_short',
  },
  {
    title: '>',
    class: 'button button_short',
  },


 ]
]

const body = document.querySelector('body');

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
body.prepend(wrapper);

const divWindow = document.createElement('div');
divWindow.className = 'block-window';
wrapper.prepend(divWindow);


function buildKeyboard() {

const divMain = document.createElement('div');
divMain.className = 'main';
wrapper.append(divMain);

const divRow1 = document.createElement('div');
divRow1.className = 'row';
divMain.prepend(divRow1);

for(let i = 0; i < 14; i++) {
  if (lang === 'en') {
    let button = document.createElement('button');
    button.className = keysList[0][i].class;
    divRow1.appendChild(button);
    button.textContent = keysList[0][i].title;
    button.setAttribute('id',`${keysList[0][i].title}`);
  }
  else if (lang === 'ru') {
    let button = document.createElement('button');
    button.className = keysList[1][i].class;
    divRow1.appendChild(button);
    button.textContent = keysList[1][i].title;
    button.setAttribute('id',`${keysList[1][i].title}`);
  }
}

const divRow2 = document.createElement('div');
divRow2.className = 'row';
divMain.append(divRow2);

for(let i = 14; i < 29; i++) {
  if (lang === 'en') {
    let button = document.createElement('button');
    button.className = keysList[0][i].class;
    divRow2.appendChild(button);
    button.textContent = keysList[0][i].title;
    button.setAttribute('id',`${keysList[0][i].title}`)
  }
  else if (lang === 'ru') {
    let button = document.createElement('button');
    button.className = keysList[1][i].class;
    divRow2.appendChild(button);
    button.textContent = keysList[1][i].title;
    button.setAttribute('id',`${keysList[1][i].title}`);
  }
}

const divRow3 = document.createElement('div');
divRow3.className = 'row';
divMain.append(divRow3);

for(let i = 29; i < 42; i++) {
  if (lang === 'en') {
    let button = document.createElement('button');
    button.className = keysList[0][i].class;
    divRow3.appendChild(button);
    button.textContent = keysList[0][i].title;
    button.setAttribute('id',`${keysList[0][i].title}`);
  }
  else if (lang === 'ru') {
    let button = document.createElement('button');
    button.className = keysList[1][i].class;
    divRow3.appendChild(button);
    button.textContent = keysList[1][i].title;
    button.setAttribute('id',`${keysList[1][i].title}`);
  }
}

const divRow4 = document.createElement('div');
divRow4.className = 'row';
divMain.append(divRow4);

for(let i = 42; i < 55; i++) {
  if (lang === 'en') {
    let button = document.createElement('button');
    button.className = keysList[0][i].class;
    divRow4.appendChild(button);
    button.textContent = keysList[0][i].title;
    button.setAttribute('id',`${keysList[0][i].title}`);
  }
  else if (lang === 'ru') {
    let button = document.createElement('button');
    button.className = keysList[1][i].class;
    divRow4.appendChild(button);
    button.textContent = keysList[1][i].title;
    button.setAttribute('id',`${keysList[1][i].title}`);
  }
}

const divRow5 = document.createElement('div');
divRow5.className = 'row';
divMain.append(divRow5);

for(let i = 55; i < 64; i++) {
  if (lang === 'en') {
    let button = document.createElement('button');
    button.className = keysList[0][i].class;
    divRow5.appendChild(button);
    button.textContent = keysList[0][i].title;
    button.setAttribute('id',`${keysList[0][i].title}`);
  }
  else if (lang === 'ru') {
    let button = document.createElement('button');
    button.className = keysList[1][i].class;
    divRow5.appendChild(button);
    button.textContent = keysList[1][i].title;
    button.setAttribute('id',`${keysList[1][i].title}`);
  }
}



//GETTING NUMBER OF KEY FOR ANIMATION
let numberId;
let butt = document.querySelectorAll('.button');

butt.forEach(element => {
  element.addEventListener('click', showTargets);
});

function showTargets(e) {
  numberId = e.target.closest('button').getAttribute('id');
  console.log(numberId);
  if (numberId === 'Backspace') {
    divWindow.lastChild.remove();
  }
  else if (numberId === 'Tab') {
    let span = document.createElement('span');
    divWindow.append(span);
    span.innerHTML = '&nbsp &nbsp';
    butt.classList.toggle('active');
  }
  else if (numberId === 'Caps lock') {
    console.log('Caps Lock');
  }
  else {
    let span = document.createElement('span');
    divWindow.append(span);
    span.textContent = numberId.toLowerCase();
    butt.classList.toggle('active');
  }
}
}

buildKeyboard();

document.addEventListener('keydown', function(event) {
  if (event.code == 'ShiftLeft' && (event.ctrlKey || event.metaKey)) {
    if (lang === 'en') {
         lang = 'ru';
         wrapper.lastChild.remove();
         buildKeyboard();
         showTargets(e);
    }
    else if (lang === 'ru') {
      lang = 'en';
      wrapper.lastChild.remove();
      buildKeyboard();
      showTargets(e);
    }
    //console.log(lang);
  }
});


