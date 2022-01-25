const projects = [
    {
        id:'multi',
        tile:'',
        title:'Multi-Post Stories',
        description:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
        technologies:['html','bootstrap','Ruby'],
        firstButton: 'See Live',
        secondButton: 'See Source',
        index: 0,
        class:'multi',
        
    },
    {
        id:'one',
        title:'Profesional Art Printing Data',
        description:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
        technologies:['html','bootstrap','Ruby'],
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
        technologies:['html','bootstrap','Ruby'],
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
        technologies:['html','bootstrap','Ruby'],
        firstButton: 'See Live',
        secondButton: 'See Source',
        index: 0,
        class:'repeated',
    },
    {
        id:'four',
        title:'Profesional Art Printing Data',
        description:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
        technologies:['html','bootstrap','Ruby'],
        firstButton: 'See Live',
        secondButton: 'See Source',
        index: 0,
        class:'repeated',
    },
    {
        id:'five',
        title:'Profesional Art Printing Data',
        tile2:'Data Dashboard <br> Healthcare',
        description:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
        technologies:['html','bootstrap','Ruby'],
        firstButton: 'See Live',
        secondButton: 'See Source',
        index: 0,
        class:'repeated',
    },
    {
        id:'six',
        title:'Profesional Art Printing Data',
        tile2:'Website Protfolio',
        description:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
        technologies:['html','bootstrap','Ruby'],
        firstButton: 'See Live',
        secondButton: 'See Source',
        index: 0,
        class:'repeated',
    },
]
const articlesection = document.querySelector('.articles');
projects.forEach((project) => {
    const articleContainer = document.createElement('article');
    articleContainer.className =project.className;
    articleContainer.id = project.id;
    articleContainer.innerHTML = `
        <h2>${project.title2}</h2>
        <h2 id="Multi">${project.title}</h2>
        <p>${project.description}</p>
        <ul class="boxes white">
            <li>${project.technologies[0]}</li>
            <li>${project.technologies[1]}</li>
            <li>${project.technologies[2]}</li>
        </ul>
        <button class="button" id="project1">See Project</button>
    `;
    articlesection.appendChild(articleContainer);
})

