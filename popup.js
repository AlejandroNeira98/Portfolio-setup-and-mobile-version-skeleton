const projects = [
  {
    title1:'My Recent Works',
    class1: 'recent',
    img:'Images/GymFit.png',
    id: 'multi',
    class:'multi',
    idh2:'Multi',
    title: 'Multi-Post Stories',
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies:['css', 'html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 0,
  },
  {
    id:'one',
    title:'Profesional Art Printing Data',
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies:['html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 0,
    class:'repeated',
    
  },
  {
    id:'two',
    title:'Profesional Art Printing Data',
    title2:'Data Dashboard <br> Healthcare',
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies:['html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 0,
    class:'repeated',
  },
  {
    id:'three',
    title:'Profesional Art Printing Data',
    title2:'Website Protfolio',
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies:['html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 0,
    class:'repeated',
  },
  {
    id:'four',
    title:'Profesional Art Printing Data',
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies:['html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 0,
    class:'repeated',
  },
  {
    id:'five',
    title:'Profesional Art Printing Data',
    title2:'Data Dashboard <br> Healthcare',
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies:['html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 0,
    class:'repeated',
  },
  {
    id:'six',
    title:'Profesional Art Printing Data',
    title2:'Website Protfolio',
    description:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies:['html','bootstrap','Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 0,
    class:'repeated',
  },
]



const articlesContainer = document.createElement('article');

articlesContainer.innerHTML = `
<section class="articles" id="portfolio">


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
</article>



<article class="${projects[1].class}" id="${projects[1].id}">
<h2>${projects[1].title}</h2>
<p>${projects[1].description}</p>
<ul class="boxes black">
<li>${projects[1].technologies[0]}</li>
<li>${projects[1].technologies[1]}</li>
<li>${projects[1].technologies[2]}</li>
</ul>
<button class="button">See Project</button>
</article>

<article class="${projects[2].class}" id="${projects[2].id}">
<h2 class="mobile">${projects[2].title}</h2>
<h2 class="desktop">${projects[2].title2}</h2>
<p>${projects[2].description}</p>
<ul class="boxes black">
<li>${projects[2].technologies[0]}</li>
<li>${projects[2].technologies[1]}</li>
<li>${projects[2].technologies[2]}</li>
</ul>
<button class="button">See Project</button>
</article>

<article class="${projects[3].class}" id="${projects[3].id}">
<h2 class="mobile">${projects[3].title}</h2>
<h2 class="desktop">${projects[3].title2} </h2>
<p>${projects[3].description}</p>
<ul class="boxes black">
<li>${projects[3].technologies[0]}</li>
<li>${projects[3].technologies[1]}</li>
<li>${projects[3].technologies[2]}</li>
</ul>
<button class="button">See Project</button>
</article>

<article class="${projects[4].class}" id="${projects[4].id}">
<h2>${projects[4].title}</h2>
<p>${projects[4].description}</p>
<ul class="boxes black">
<li>${projects[4].technologies[0]}</li>
<li>${projects[4].technologies[1]}</li>
<li>${projects[4].technologies[2]}</li>
</ul>
<button class="button">See Project</button>
</article>

<article class="${projects[5].class}" id="${projects[5].id}">
<h2 class="mobile">${projects[5].title}</h2>
<h2 class="desktop">${projects[5].title2}</h2>
<p>${projects[5].description}</p>
<ul class="boxes black">
<li>${projects[5].technologies[0]}</li>
<li>${projects[5].technologies[1]}</li>
<li>${projects[5].technologies[2]}</li>
</ul>
<button class="button">See Project</button>
</article>

<article class="${projects[6].class}" id="${projects[6].id}">
<h2 class="mobile">${projects[6].title}</h2>
<h2 class="desktop">${projects[6].title2} </h2>
<p>${projects[6].description}</p>
<ul class="boxes black">
<li>${projects[6].technologies[0]}</li>
<li>${projects[6].technologies[1]}</li>
<li>${projects[6].technologies[2]}</li>
</ul>
<button class="button">See Project</button>
</article>
</section>
`;

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

function showMenu0(a) {
  a.preventDefault();
  projectWindow.style.display = 'flex';
  projectWindow.querySelector('h2').innerText = projects[0].title;
  projectWindow.querySelector('.img_description #descriptioncontainer #description').innerText = projects[0].description;
}

function showMenu1(a) {
  a.preventDefault();
  projectWindow.style.display = 'flex';
  projectWindow.querySelector('h2').innerText = projects[1].title;
  projectWindow.querySelector('.img_description #descriptioncontainer #description').innerText = projects[1].description;
  projectWindow.querySelector('#li4').remove;
}

function showMenu2(a) {
  a.preventDefault();
  projectWindow.style.display = 'flex';
  projectWindow.querySelector('h2').innerText = projects[2].title;
  projectWindow.querySelector('.img_description #descriptioncontainer #description').innerText = projects[2].description;
  projectWindow.querySelector('#li4').remove;
}

function showMenu3(a) {
  a.preventDefault();
  projectWindow.style.display = 'flex';
  projectWindow.querySelector('h2').innerText = projects[3].title;
  projectWindow.querySelector('.img_description #descriptioncontainer #description').innerText = projects[3].description;
  projectWindow.querySelector('#li4').remove;
}

function showMenu4(a) {
  a.preventDefault();
  projectWindow.style.display = 'flex';
  projectWindow.querySelector('h2').innerText = projects[4].title;
  projectWindow.querySelector('.img_description #descriptioncontainer #description').innerText = projects[4].description;
  projectWindow.querySelector('#li4').remove;
}

function showMenu5(a) {
  a.preventDefault();
  projectWindow.style.display = 'flex';
  projectWindow.querySelector('h2').innerText = projects[5].title;
  projectWindow.querySelector('.img_description #descriptioncontainer #description').innerText = projects[5].description;
  projectWindow.querySelector('#li4').remove;
}

function showMenu6(a) {
  a.preventDefault();
  projectWindow.style.display = 'flex';
  projectWindow.querySelector('h2').innerText = projects[0].title;
  projectWindow.querySelector('.img_description #descriptioncontainer #description').innerText = projects[6].description;
}

function hideMenu() {
  projectWindow.style.display = 'none';
}

closebutton.addEventListener('click', hideMenu);

button0.addEventListener('click', showMenu0);
button1.addEventListener('click', showMenu1);
button2.addEventListener('click', showMenu2);
button3.addEventListener('click', showMenu3);
button4.addEventListener('click', showMenu4);
button5.addEventListener('click', showMenu5);
button6.addEventListener('click', showMenu6);