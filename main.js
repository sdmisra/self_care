var affirmations = [
  "I forgive myself and set myself free.",
  "I forgive myself and set myself free.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices.",
];
var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don\`t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather.",
];
// Variables to affect DOM elements here!
var choiceButton = document.querySelector('.rec-button')
var selectionValues  = document.querySelectorAll('input[name="man-or-aff"]')
var dynamicDisplayBox = document.querySelector('.message-expression')
var popUpBox = document.querySelector('.pop-up-box')
var removeButton = document.querySelector('.remove-button')
choiceButton.addEventListener('click', mantraOrAffirm)
removeButton.addEventListener('click', removeThought)

function mantraOrAffirm() {
  var selectedVal;
  for (var value of selectionValues) {
    if (value.checked) {
      selectedVal = value.value;
    }
  }
  if (selectedVal === "mantra") {
  var randIndex = getRandomIndex(mantras);
  dynamicDisplayBox.innerHTML = `<div id = "${randIndex}" class="mantra-box affirm-mantra-styling">${mantras[randIndex]}</div>`
  } else {
  var randIndex = getRandomIndex(affirmations); 
  dynamicDisplayBox.innerHTML = `<div id = "${randIndex}" class="affirm-box affirm-mantra-styling ">${affirmations[randIndex]}</div>`
  }
  removeButton.classList.remove('hidden')
}
 // Blatantly taken from RomCom:
 
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
  }

function removeThought () {
  var thingRemoved = "";
  if ( dynamicDisplayBox.childNodes[0].classList[0] === 'mantra-box') {
    thingRemoved = mantras.splice(parseInt(dynamicDisplayBox.childNodes[0].id), 1)
    }
  else {
    thingRemoved = affirmations.splice(parseInt(dynamicDisplayBox.childNodes[0].id), 1)
    }
  alert(`"You have released "${thingRemoved}" into the ether...`);
  dynamicDisplayBox.innerHTML = `<svg class="med-icon" height="1272pt" viewBox="-94 0 1272 1272.314" width="1272pt" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a"><stop offset="0" stop-color="#ff99b5"/><stop offset="1" stop-color="#ffdc68"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="287.1819680064" x2="797.8954796368" xlink:href="#a" y1="633.4576883744" y2="122.7440767688"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="-55.3765564056" x2="342.1137415472" xlink:href="#a" y1="558.6884357488" y2="161.1912395072"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="779.8389587648" x2="1103.4201907128" xlink:href="#a" y1="521.72820416" y2="198.146972212"/><path d="m867.683594 1212.855469-45.265625-497.945313c-7.261719-83.976562-77.738281-148.339844-162.03125-147.964844h-235.777344c-84.292969-.371093-154.765625 63.992188-162.027344 147.972657l-45.265625 497.9375c-2.710937 29.828125 19.273438 56.207031 49.105469 58.917969 1.628906.148437 3.265625.222656 4.898437.222656h542.351563c29.953125 0 54.234375-24.28125 54.234375-54.234375 0-1.636719-.074219-3.273438-.222656-4.90625zm0 0" fill="#ffedb4"/><path d="m325.78125 1212.855469 45.265625-497.9375c7.261719-83.980469 77.738281-148.347657 162.035156-147.972657h-108.46875c-84.292969-.367187-154.769531 63.996094-162.027343 147.972657l-45.265626 497.9375c-2.710937 29.832031 19.273438 56.210937 49.105469 58.921875 1.628907.148437 3.261719.222656 4.898438.222656h108.46875c-29.953125 0-54.234375-24.285156-54.234375-54.238281 0-1.636719.074218-3.273438.222656-4.90625zm0 0" fill="#ffe58e"/><path d="m217.089844 1055.058594h28.628906c188.3125 0 405.25 216.9375 405.25 216.9375h-433.878906c-59.90625 0-108.46875-48.5625-108.46875-108.46875-.003906-59.90625 48.5625-108.46875 108.46875-108.46875zm0 0" fill="#ffdc68"/><path d="m867.90625 1055.058594h-28.628906c-188.308594 0-405.25 216.9375-405.25 216.9375h433.878906c59.90625 0 108.472656-48.5625 108.472656-108.46875s-48.566406-108.46875-108.472656-108.46875zm0 0" fill="#ffe58e"/><path d="m705.203125 404.242188c0 89.859374-72.847656 162.703124-162.707031 162.703124-89.855469 0-162.703125-72.84375-162.703125-162.703124 0-89.859376 72.847656-162.703126 162.703125-162.703126 89.859375 0 162.707031 72.84375 162.707031 162.703126zm0 0" fill="#ffedb4"/><path d="m596.734375 512.710938c-89.859375.007812-162.714844-72.828126-162.722656-162.6875-.003907-29.890626 8.226562-59.199219 23.785156-84.71875-76.707031 46.800781-100.953125 146.929687-54.148437 223.636718 46.804687 76.707032 146.933593 100.949219 223.640624 54.144532 22.097657-13.484376 40.660157-32.046876 54.144532-54.144532-25.496094 15.585938-54.8125 23.816406-84.699219 23.769532zm0 0" fill="#ffe58e"/><path d="m542.496094 24.597656c-209.792969.125-379.765625 170.300782-379.640625 380.09375.027343 42.933594 7.332031 85.550782 21.601562 126.042969l102.273438-36.132813c-49.761719-141.257812 24.410156-296.109374 165.664062-345.871093 141.257813-49.765625 296.109375 24.410156 345.871094 165.664062 20.550781 58.324219 20.542969 121.921875-.011719 180.242188l102.273438 36.140625c69.761718-197.859375-34.082032-414.804688-231.9375-484.566406-40.507813-14.28125-83.140625-21.589844-126.09375-21.613282zm0 0" fill="url(#b)"/><path d="m253.257812 80.828125-72.339843-80.828125c-201.320313 180.121094-239.441407 480.917969-89.417969 705.5625l90.167969-60.335938c-119.96875-179.722656-89.449219-420.320312 71.589843-564.398437zm0 0" fill="url(#c)"/><path d="m904.074219 0-72.335938 80.828125c161.054688 144.074219 191.582031 384.683594 71.613281 564.410156l90.128907 60.339844c150.039062-224.644531 111.925781-525.453125-89.40625-705.578125zm0 0" fill="url(#d)"/></svg>
  `
  removeButton.classList.add('hidden')
  }
