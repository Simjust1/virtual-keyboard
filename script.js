import keysList from './keysList.js';

let lang = 'en';
let shriftPushed = 'off';

function saveSessionStorage() {
  sessionStorage.setItem('language', lang);
}
window.addEventListener('unload', saveSessionStorage);

//function getFromSessionStorage() {
  if(sessionStorage.getItem('language')) {
    lang = sessionStorage.getItem('language');
  }

//}
//window.addEventListener('load', getFromSessionStorage);
console.log(lang);

const body = document.querySelector('body');

const h1 = document.createElement('h1');
h1.className = 'h1';
body.prepend(h1);
h1.innerHTML = 'RSS Virtual Keyboard';

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
body.append(wrapper);

const divWindow = document.createElement('div');
divWindow.className = 'block-window';
wrapper.prepend(divWindow);

const textWindow = document.createElement('p');
textWindow.className = 'text';
divWindow.after(textWindow);
textWindow.innerHTML = 'Клавиатура создана в операционной системе Windows';

const switchLanguage = document.createElement('p');
switchLanguage.className = 'text';
textWindow.after(switchLanguage);
switchLanguage.innerHTML = 'Комбинация для переключения языка - левый Ctl + левый Shift';


function buildKeyboard() {

  const divMain = document.createElement('div');
  divMain.className = 'main';
  wrapper.append(divMain);

  const divRow1 = document.createElement('div');
  divRow1.className = 'row';
  divMain.prepend(divRow1);

  for (let i = 0; i < 14; i++) {
    if (lang === 'en' && shriftPushed === 'off') {
      const button = document.createElement('button');
      button.className = keysList[0][i].class;
      divRow1.appendChild(button);
      button.textContent = keysList[0][i].title;
      button.setAttribute('id',`${keysList[0][i].title}`);
    }
    else if (lang === 'en' && shriftPushed === 'on') {
      const button = document.createElement('button');
      button.className = keysList[0][i].class;
      divRow1.appendChild(button);
      button.textContent = keysList[0][i].titleWithShrift;
      button.setAttribute('id',`${keysList[0][i].titleWithShrift}`);
    }
    else if (lang === 'ru' && shriftPushed === 'off') {
      let button = document.createElement('button');
      button.className = keysList[1][i].class;
      divRow1.appendChild(button);
      button.textContent = keysList[1][i].title;
      button.setAttribute('id',`${keysList[1][i].title}`);
    }
    else if (lang === 'ru' && shriftPushed === 'on') {
      let button = document.createElement('button');
      button.className = keysList[1][i].class;
      divRow1.appendChild(button);
      button.textContent = keysList[1][i].titleWithShrift;
      button.setAttribute('id',`${keysList[1][i].titleWithShrift}`);
    }
  }

  const divRow2 = document.createElement('div');
  divRow2.className = 'row';
  divMain.append(divRow2);

  for (let i = 14; i < 29; i++) {
    if (lang === 'en' && shriftPushed === 'off') {
      let button = document.createElement('button');
      button.className = keysList[0][i].class;
      divRow2.appendChild(button);
      button.textContent = keysList[0][i].title;
      button.setAttribute('id',`${keysList[0][i].title}`)
    }
    else if (lang === 'en' && shriftPushed === 'on') {
      const button = document.createElement('button');
      button.className = keysList[0][i].class;
      divRow2.appendChild(button);
      button.textContent = keysList[0][i].titleWithShrift;
      button.setAttribute('id',`${keysList[0][i].titleWithShrift}`);
    }
    else if (lang === 'ru' && shriftPushed === 'off') {
      let button = document.createElement('button');
      button.className = keysList[1][i].class;
      divRow2.appendChild(button);
      button.textContent = keysList[1][i].title;
      button.setAttribute('id',`${keysList[1][i].title}`);
    }
    else if (lang === 'ru' && shriftPushed === 'on') {
      let button = document.createElement('button');
      button.className = keysList[1][i].class;
      divRow2.appendChild(button);
      button.textContent = keysList[1][i].titleWithShrift;
      button.setAttribute('id',`${keysList[1][i].titleWithShrift}`);
    }
  }

  const divRow3 = document.createElement('div');
  divRow3.className = 'row';
  divMain.append(divRow3);

  for (let i = 29; i < 42; i++) {
    if (lang === 'en' && shriftPushed === 'off') {
      const button = document.createElement('button');
      button.className = keysList[0][i].class;
      divRow3.appendChild(button);
      button.textContent = keysList[0][i].title;
      button.setAttribute('id',`${keysList[0][i].title}`);
    }
    else if (lang === 'en' && shriftPushed === 'on') {
      const button = document.createElement('button');
      button.className = keysList[0][i].class;
      divRow3.appendChild(button);
      button.textContent = keysList[0][i].titleWithShrift;
      button.setAttribute('id',`${keysList[0][i].titleWithShrift}`);
    }
    else if (lang === 'ru' && shriftPushed === 'off') {
      const button = document.createElement('button');
      button.className = keysList[1][i].class;
      divRow3.appendChild(button);
      button.textContent = keysList[1][i].title;
      button.setAttribute('id',`${keysList[1][i].title}`);
    }
    else if (lang === 'ru' && shriftPushed === 'on') {
      let button = document.createElement('button');
      button.className = keysList[1][i].class;
      divRow3.appendChild(button);
      button.textContent = keysList[1][i].titleWithShrift;
      button.setAttribute('id',`${keysList[1][i].titleWithShrift}`);
    }
  }

  const divRow4 = document.createElement('div');
  divRow4.className = 'row';
  divMain.append(divRow4);

  for (let i = 42; i < 55; i++) {
    if (lang === 'en' && shriftPushed === 'off') {
      const button = document.createElement('button');
      button.className = keysList[0][i].class;
      divRow4.appendChild(button);
      button.textContent = keysList[0][i].title;
      button.setAttribute('id',`${keysList[0][i].title}`);
    }
    else if (lang === 'en' && shriftPushed === 'on') {
      const button = document.createElement('button');
      button.className = keysList[0][i].class;
      divRow4.appendChild(button);
      button.textContent = keysList[0][i].titleWithShrift;
      button.setAttribute('id',`${keysList[0][i].titleWithShrift}`);
    }
    else if (lang === 'ru' && shriftPushed === 'off') {
      const button = document.createElement('button');
      button.className = keysList[1][i].class;
      divRow4.appendChild(button);
      button.textContent = keysList[1][i].title;
      button.setAttribute('id',`${keysList[1][i].title}`);
    }
    else if (lang === 'ru' && shriftPushed === 'on') {
      let button = document.createElement('button');
      button.className = keysList[1][i].class;
      divRow4.appendChild(button);
      button.textContent = keysList[1][i].titleWithShrift;
      button.setAttribute('id',`${keysList[1][i].titleWithShrift}`);
    }
  }

  const divRow5 = document.createElement('div');
  divRow5.className = 'row';
  divMain.append(divRow5);

  for (let i = 55; i < 64; i++) {
    if (lang === 'en' && shriftPushed === 'off') {
      const button = document.createElement('button');
      button.className = keysList[0][i].class;
      divRow5.appendChild(button);
      button.textContent = keysList[0][i].title;
      button.setAttribute('id',`${keysList[0][i].title}`);
    }
    else if (lang === 'en' && shriftPushed === 'on') {
      const button = document.createElement('button');
      button.className = keysList[0][i].class;
      divRow5.appendChild(button);
      button.textContent = keysList[0][i].titleWithShrift;
      button.setAttribute('id',`${keysList[0][i].titleWithShrift}`);
    }
    else if (lang === 'ru' && shriftPushed === 'off') {
      const button = document.createElement('button');
      button.className = keysList[1][i].class;
      divRow5.appendChild(button);
      button.textContent = keysList[1][i].title;
      button.setAttribute('id',`${keysList[1][i].title}`);
    }
    else if (lang === 'ru' && shriftPushed === 'on') {
      let button = document.createElement('button');
      button.className = keysList[1][i].class;
      divRow5.appendChild(button);
      button.textContent = keysList[1][i].titleWithShrift;
      button.setAttribute('id',`${keysList[1][i].titleWithShrift}`);
    }
  }

  //  GETTING NUMBER OF KEY FOR ANIMATION
  let numberId;
  let butt = document.querySelectorAll('.button');

  butt.forEach((element) => {
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
    else if (numberId === 'ENTER') {
      let span = document.createElement('span');
      divWindow.append(span);
      span.innerHTML = '<br>';
      butt.classList.toggle('active');
    }
    else if (numberId === 'Shift' || numberId === 'Alt' || numberId === 'Ctl') {
      butt.classList.toggle('active');
    }
    else if (numberId === 'Caps lock') {
      console.log('Caps Lock');
    }
    else {
      let span = document.createElement('span');
      divWindow.append(span);
      span.textContent = numberId;
      butt.classList.toggle('active');
    }
  }
}

buildKeyboard();

var down = false;

document.addEventListener('keydown', function changeLang(event) {
  if (event.code == 'ShiftLeft' && (event.ctrlKey || event.metaKey)) {

    if (lang === 'en') {
      lang = 'ru';
      wrapper.lastChild.remove();
      buildKeyboard();
      saveSessionStorage();
    }
    else if (lang === 'ru') {
      lang = 'en';
      wrapper.lastChild.remove();
      buildKeyboard();
      saveSessionStorage();
    }
  }
});

document.addEventListener('keydown', function(event) {

  let key = event.key;

  if (key === 'Backspace') {
    divWindow.lastChild.remove();
  }
  else if (key === 'Tab') {
    let span = document.createElement('span');
    divWindow.append(span);
    span.innerHTML = '&nbsp &nbsp';
    //butt.classList.toggle('active');
  }
  else if (key === 'Enter') {
    let span = document.createElement('span');
    divWindow.append(span);
    span.innerHTML = '<br>';
    //butt.classList.toggle('active');
  }
  else if (key === 'Shift') {
    if(down) return;
    down = true;
    if (shriftPushed === 'off') {
      console.log(key);
      shriftPushed = 'on';
      wrapper.lastChild.remove();
      buildKeyboard();
    }
    else if (shriftPushed === 'on') {
      shriftPushed = 'off';
      wrapper.lastChild.remove();
      buildKeyboard();
    }
    //let span = document.createElement('span');
    //divWindow.append(span);
    //span.innerHTML = '';
    //butt.classList.toggle('active');
  }
  else if (key === 'Alt' || key === 'Control') {
    let span = document.createElement('span');
    divWindow.append(span);
    span.innerHTML = '';
    //butt.classList.toggle('active');
  }
  else {
  let span = document.createElement('span');
  divWindow.append(span);
  span.innerHTML = key;
  }



/*
  let butt = document.querySelectorAll('.button');
  //let tt = butt.includes('key');
  let ttr = butt.includes('1');
*/
}, false);


  document.addEventListener('keyup', function (event) {
    let key = event.key;
    down = false;
    if (key === 'Shift') {

      if (shriftPushed === 'on') {
        console.log(key);
        shriftPushed = 'off';
        wrapper.lastChild.remove();
        buildKeyboard();
      }
    }

}, false);
