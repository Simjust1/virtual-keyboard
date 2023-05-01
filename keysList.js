const keysList = [
  //первый массив - клавиши в латинице
  [
    {
      title: '`',
      titleWithShrift: '~',
      class: 'button button button_short',
    },
    {
      title: 1,
      titleWithShrift: '!',
      class: 'button button_short',
    },
    {
      title: 2,
      titleWithShrift: '@',
      class: 'button button_short',
    },
    {
      title: 3,
      titleWithShrift: '#',
      class: 'button button_short',
    },
    {
      title: 4,
      titleWithShrift: '$',
      class: 'button button_short',
    },
    {
      title: 5,
      titleWithShrift: '%',
      class: 'button button_short',
    },
    {
      title: 6,
      titleWithShrift: '^',
      class: 'button button_short',
    },
    {
      title: 7,
      titleWithShrift: '&',
      class: 'button button_short',
    },
    {
      title: 8,
      titleWithShrift: '*',
      class: 'button button_short',
    },
    {
      title: 9,
      titleWithShrift: '(',
      class: 'button button_short',
    },
    {
      title: 0,
      titleWithShrift: ')',
      class: 'button button_short',
    },
    {
      title: '-',
      titleWithShrift: '_',
      class: 'button button_short',
    },
    {
      title: '=',
      titleWithShrift: '+',
      class: 'button button_short',
    },
    {
      title: 'Backspace',
      titleWithShrift: 'Backspace',
      class: 'button button_long',
    },
    {
      title: 'Tab',
      titleWithShrift: 'Tab',
      class: 'button button_middle',
    },
    {
      title: 'q',
      titleWithShrift: 'Q',
      class: 'button button_short',
    },
    {
      title: 'w',
      titleWithShrift: 'W',
      class: 'button button_short',
    },
    {
      title: 'e',
      titleWithShrift: 'E',
      class: 'button button_short',
    },
    {
      title: 'r',
      titleWithShrift: 'R',
      class: 'button button_short',
    },
    {
      title: 't',
      titleWithShrift: 'T',
      class: 'button button_short',
    },
    {
      title: 'y',
      titleWithShrift: 'Y',
      class: 'button button_short',
    },
    {
      title: 'u',
      titleWithShrift: 'U',
      class: 'button button_short',
    },
    {
      title: 'i',
      titleWithShrift: 'I',
      class: 'button button_short',
    },
    {
      title: 'o',
      titleWithShrift: 'O',
      class: 'button button_short',
    },
    {
      title: 'p',
      titleWithShrift: 'P',
      class: 'button button_short',
    },
    {
      title: '[',
      titleWithShrift: '[',
      class: 'button button_short',
    },
    {
      title: ']',
      titleWithShrift: ']',
      class: 'button button_short',
    },
    {
      title: '\\',
      titleWithShrift: '\\',
      class: 'button button_short',
    },
    {
      title: 'Del',
      titleWithShrift: 'Del',
      class: 'button button_middle',
    },
    {
      title: 'Caps Lock',
      titleWithShrift: 'Caps Lock',
      class: 'button button_middle',
    },
    {
      title: 'a',
      titleWithShrift: 'A',
      class: 'button button_short',
    },
    {
      title: 's',
      titleWithShrift: 'S',
      class: 'button button_short',
    },
    {
      title: 'd',
      titleWithShrift: 'D',
      class: 'button button_short',
    },
    {
      title: 'f',
      titleWithShrift: 'F',
      class: 'button button_short',
    },
    {
      title: 'g',
      titleWithShrift: 'G',
      class: 'button button_short',
    },
    {
      title: 'h',
      titleWithShrift: 'H',
      class: 'button button_short',
    },
    {
      title: 'j',
      titleWithShrift: 'J',
      class: 'button button_short',
    },
    {
      title: 'k',
      titleWithShrift: 'K',
      class: 'button button_short',
    },
    {
      title: 'l',
      titleWithShrift: 'L',
      class: 'button button_short',
    },
    {
      title: ';',
      titleWithShrift: ';',
      class: 'button button_short',
    },
    {
      title: "'",
      titleWithShrift: "'",
      class: 'button button_short',
    },
    {
      title: 'ENTER',
      titleWithShrift: 'ENTER',
      class: 'button button_long',
    },


    {
      title: 'Shift',
      titleWithShrift: 'Shift',
      class: 'button button_middle',
    },
    {
      title: '\\',
      titleWithShrift: '\\',
      class: 'button button_short',
    },
    {
      title: 'z',
      titleWithShrift: 'Z',
      class: 'button button_short',
    },
    {
      title: 'x',
      titleWithShrift: 'X',
      class: 'button button_short',
    },
    {
      title: 'c',
      titleWithShrift: 'C',
      class: 'button button_short',
    },
    {
      title: 'v',
      titleWithShrift: 'V',
      class: 'button button_short',
    },
    {
      title: 'b',
      titleWithShrift: 'B',
      class: 'button button_short',
    },
    {
      title: 'n',
      titleWithShrift: 'N',
      class: 'button button_short',
    },
    {
      title: 'm',
      titleWithShrift: 'M',
      class: 'button button_short',
    },
    {
      title: ',',
      titleWithShrift: ',',
      class: 'button button_short',
    },
    {
      title: '.',
      titleWithShrift: '.',
      class: 'button button_short',
    },
    {
      title: "/",
      titleWithShrift: '/',
      class: 'button button_short',
    },
    {
      title: 'Shift',
      titleWithShrift: 'Shift',
      class: 'button button_long',
    },

    {
      title: 'Ctl',
      titleWithShrift: 'Ctl',
      class: 'button button_middle',
    },
    {
      title: 'Win',
      titleWithShrift: 'Win',
      class: 'button button_short',
    },
    {
      title: 'Alt',
      titleWithShrift: 'Alt',
      class: 'button button_short',
    },
    {
      title: '',
      titleWithShrift: '',
      class: 'button button_longest',
    },
    {
      title: 'Alt',
      titleWithShrift: 'Alt',
      class: 'button button_short',
    },
    {
      title: 'Ctl',
      titleWithShrift: 'Ctl',
      class: 'button button_short',
    },
    {
      title: '<',
      titleWithShrift: '<',
      class: 'button button_short',
    },
    {
      title: '?',
      titleWithShrift: '?',
      class: 'button button_short',
    },
    {
      title: '>',
      titleWithShrift: '>',
      class: 'button button_short',
    },
  ],
//второй массив - клавиши в кирилице
  [
    {
      title: 'ё',
      titleWithShrift: 'Ё',
      class: 'button button button_short',
    },
    {
      title: 1,
      titleWithShrift: '!',
      class: 'button button_short',
    },
    {
      title: 2,
      titleWithShrift: '"',
      class: 'button button_short',
    },
    {
      title: 3,
      titleWithShrift: '№',
      class: 'button button_short',
    },
    {
      title: 4,
      titleWithShrift: ';',
      class: 'button button_short',
    },
    {
      title: 5,
      titleWithShrift: '%',
      class: 'button button_short',
    },
    {
      title: 6,
      titleWithShrift: ':',
      class: 'button button_short',
    },
    {
      title: 7,
      titleWithShrift: '?',
      class: 'button button_short',
    },
    {
      title: 8,
      titleWithShrift: '*',
      class: 'button button_short',
    },
    {
      title: 9,
      titleWithShrift: '(',
      class: 'button button_short',
    },
    {
      title: 0,
      titleWithShrift: ')',
      class: 'button button_short',
    },
    {
      title: '-',
      titleWithShrift: '_',
      class: 'button button_short',
    },
    {
      title: '=',
      titleWithShrift: '+',
      class: 'button button_short',
    },
    {
      title: 'Backspace',
      titleWithShrift: 'Backspace',
      class: 'button button_long',
    },
    {
      title: 'Tab',
      titleWithShrift: 'Tab',
      class: 'button button_middle',
    },
    {
      title: 'й',
      titleWithShrift: 'Й',
      class: 'button button_short',
    },
    {
      title: 'ц',
      titleWithShrift: 'Ц',
      class: 'button button_short',
    },
    {
      title: 'у',
      titleWithShrift: 'У',
      class: 'button button_short',
    },
    {
      title: 'к',
      titleWithShrift: 'К',
      class: 'button button_short',
    },
    {
      title: 'е',
      titleWithShrift: 'Е',
      class: 'button button_short',
    },
    {
      title: 'н',
      titleWithShrift: 'Н',
      class: 'button button_short',
    },
    {
      title: 'г',
      titleWithShrift: 'Г',
      class: 'button button_short',
    },
    {
      title: 'ш',
      titleWithShrift: 'Ш',
      class: 'button button_short',
    },
    {
      title: 'щ',
      titleWithShrift: 'Щ',
      class: 'button button_short',
    },
    {
      title: 'з',
      titleWithShrift: 'З',
      class: 'button button_short',
    },
    {
      title: 'х',
      titleWithShrift: 'Х',
      class: 'button button_short',
    },
    {
      title: 'ъ',
      titleWithShrift: 'Ъ',
      class: 'button button_short',
    },
    {
      title: '\\',
      titleWithShrift: '\\',
      class: 'button button_short',
    },
    {
      title: 'Del',
      titleWithShrift: 'Del',
      class: 'button button_middle',
    },
    {
      title: 'Caps Lock',
      titleWithShrift: 'Caps Lock',
      class: 'button button_middle',
    },
    {
      title: 'ф',
      titleWithShrift: 'Ф',
      class: 'button button_short',
    },
    {
      title: 'ы',
      titleWithShrift: 'Ы',
      class: 'button button_short',
    },
    {
      title: 'в',
      titleWithShrift: 'В',
      class: 'button button_short',
    },
    {
      title: 'а',
      titleWithShrift: 'А',
      class: 'button button_short',
    },
    {
      title: 'п',
      titleWithShrift: 'П',
      class: 'button button_short',
    },
    {
      title: 'р',
      titleWithShrift: 'Р',
      class: 'button button_short',
    },
    {
      title: 'о',
      titleWithShrift: 'О',
      class: 'button button_short',
    },
    {
      title: 'л',
      titleWithShrift: 'Л',
      class: 'button button_short',
    },
    {
      title: 'д',
      titleWithShrift: 'Д',
      class: 'button button_short',
    },
    {
      title: 'ж',
      titleWithShrift: 'Ж',
      class: 'button button_short',
    },
    {
      title: "э",
      titleWithShrift: "Э",
      class: 'button button_short',
    },
    {
      title: 'ENTER',
      titleWithShrift: 'ENTER',
      class: 'button button_long',
    },


    {
      title: 'Shift',
      titleWithShrift: 'Shift',
      class: 'button button_middle',
    },
    {
      title: '\\',
      titleWithShrift: '\\',
      class: 'button button_short',
    },
    {
      title: 'я',
      titleWithShrift: 'Я',
      class: 'button button_short',
    },
    {
      title: 'ч',
      titleWithShrift: 'Ч',
      class: 'button button_short',
    },
    {
      title: 'с',
      titleWithShrift: 'С',
      class: 'button button_short',
    },
    {
      title: 'м',
      titleWithShrift: 'М',
      class: 'button button_short',
    },
    {
      title: 'и',
      titleWithShrift: 'И',
      class: 'button button_short',
    },
    {
      title: 'т',
      titleWithShrift: 'Т',
      class: 'button button_short',
    },
    {
      title: 'ь',
      titleWithShrift: 'Ь',
      class: 'button button_short',
    },
    {
      title: 'б',
      titleWithShrift: 'Б',
      class: 'button button_short',
    },
    {
      title: 'ю',
      titleWithShrift: 'Ю',
      class: 'button button_short',
    },
    {
      title: "/",
      titleWithShrift: '/',
      class: 'button button_short',
    },
    {
      title: 'Shift',
      titleWithShrift: 'Shift',
      class: 'button button_long',
    },


    {
      title: 'Ctl',
      titleWithShrift: 'Ctl',
      class: 'button button_middle',
    },
    {
      title: 'Win',
      titleWithShrift: 'Win',
      class: 'button button_short',
    },
    {
      title: 'Alt',
      titleWithShrift: 'Alt',
      class: 'button button_short',
    },
    {
      title: '',
      titleWithShrift: '',
      class: 'button button_longest',
    },
    {
      title: 'Alt',
      titleWithShrift: 'Alt',
      class: 'button button_short',
    },
    {
      title: 'Ctl',
      titleWithShrift: 'Ctl',
      class: 'button button_short',
    },
    {
      title: '<',
      titleWithShrift: '<',
      class: 'button button_short',
    },
    {
      title: '?',
      titleWithShrift: '?',
      class: 'button button_short',
    },
    {
      title: '>',
      titleWithShrift: '>',
      class: 'button button_short',
    },
 ]
]

export default keysList;
