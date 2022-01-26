const projects = [
  {
    title1: 'My Recent Works',
    class1: 'recent',
    img: 'Images/GymFit.png',
    id: 'multi',
    class: 'multi',
    idh2: 'Multi',
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 0,
  },
  {
    id: 'one',
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 0,
    class: 'repeated',
  },
  {
    id: 'two',
    title: 'Profesional Art Printing Data',
    title2: 'Data Dashboard <br> Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 0,
    class: 'repeated',
  },
  {
    id: 'three',
    title: 'Profesional Art Printing Data',
    title2: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 0,
    class: 'repeated',
  },
  {
    id: 'four',
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 0,
    class: 'repeated',
  },
  {
    id: 'five',
    title: 'Profesional Art Printing Data',
    title2: 'Data Dashboard <br> Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 0,
    class: 'repeated',
  },
  {
    id: 'six',
    title: 'Profesional Art Printing Data',
    title2: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 0,
    class: 'repeated',
  },
];

const articlesContainer = document.createElement('section');
articlesContainer.classList.add('articles');
articlesContainer.id = 'portfolio'

let text="";

projects.forEach(element => {

  if (element == projects[0]){

  text += `
  <h2 class="${projects[0].class1}">${projects[0].title1}</h2>
  <hr id="first-hr">

  <img id="GymFit" src="${projects[0].img}" alt="GymFit">

  <article class="${projects[0].class}" id="${projects[0].id}">
  <h2 id="${projects[0].idh2}">${projects[0].title}</h2>
  <p>${projects[0].description}</p>
  <ul class="boxes white">
  <li>${projects[0].technologies[0]}</li>
  <li>${projects[0].technologies[1]}</li>
  <li>${projects[0].technologies[2]}</li>
  <li>${projects[0].technologies[3]}</li>
  </ul>
  <button class="button" id="project1">See Project</button>
  </article>`
  }

  else if ('title2' in element){
   text += `
    <article class="${element.class}" id="${element.id}">
    <h2 class="mobile">${element.title}</h2>
    <h2 class="desktop">${element.title2}</h2>
    <p>${element.description}</p>
    <ul class="boxes black">
    <li>${element.technologies[0]}</li>
    <li>${element.technologies[1]}</li>
    <li>${element.technologies[2]}</li>
    </ul>
    <button class="button">See Project</button>
    </article>
   `
  }

  else {
    text +=`
      <article class="${element.class}" id="${element.id}">
      <h2>${element.title}</h2>
      <p>${element.description}</p>
      <ul class="boxes black">
      <li>${element.technologies[0]}</li>
      <li>${element.technologies[1]}</li>
      <li>${element.technologies[2]}</li>
      </ul>
      <button class="button">See Project</button>
      </article>
  `
  }
});

articlesContainer.innerHTML = text;

document.body.insertBefore(articlesContainer, document.body.children[3]);

const closebutton = document.querySelector('.popup #close');

const button0 = document.querySelector('#multi .button');
const button1 = document.querySelector('#one .button');
const button2 = document.querySelector('#two .button');
const button3 = document.querySelector('#three .button');
const button4 = document.querySelector('#four .button');
const button5 = document.querySelector('#five .button');
const button6 = document.querySelector('#six .button');

const projectWindow = document.querySelector('.popup');

function prevent(e){
  e.preventDefault();
}

function showMenu(a) {
  projectWindow.style.display = 'flex';
  projectWindow.querySelector('h2').innerText = projects[a].title;
  projectWindow.querySelector('.img_description #descriptioncontainer #description').innerText = projects[a].description;
}


function hideMenu() {
  projectWindow.style.display = 'none';
}

closebutton.addEventListener('click', hideMenu);

button0.addEventListener('click', () => {
  prevent();
  showMenu(0);
});

button1.addEventListener('click', () => {
  prevent();
  showMenu(1);
});

button2.addEventListener('click', () => {
  prevent();
  showMenu(2);
});

button3.addEventListener('click', () => {
  prevent();
  showMenu(3);
});

button4.addEventListener('click', () => {
  prevent();
  showMenu(4);
});

button5.addEventListener('click', () => {
  prevent();
  showMenu(5);
});

button6.addEventListener('click', () => {
  prevent();
  showMenu(6);
});