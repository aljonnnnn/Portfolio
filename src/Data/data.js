import aboutImg from '../dist/img/me.png'

//  Contact
import emailIcon from '../dist/img/contact-email-icon.svg'
import phonelIcon from '../dist/img/contact-phone-icon.svg'


// Skills 
import html from '../dist/img/html.svg'
import css from '../dist/img/css.svg'
import javascript from '../dist/img/js.svg'
import bootstrap from '../dist/img/bootstrap.svg'
import sass from '../dist/img/sass.svg'
import react from '../dist/img/react.svg'
import jquery from '../dist/img/jquery.svg'
import wordpress from '../dist/img/wordpress.svg'
import figma from '../dist/img/figma.svg'
import git from '../dist/img/git.svg'
import github from '../dist/img/github.svg'
import vscode from '../dist/img/vscode.svg'
import npm from '../dist/img/npm.svg'
import command from '../dist/img/command.svg'
import stackoverflow from '../dist/img/stackoverflow.svg'


// Portfolio 
import restaurant from '../dist/img/resturant-template.png'
import halaka from '../dist/img/halaka-bootstrap-template.png'
import whoPay from '../dist/img/who-pay.png'
import todoList from '../dist/img/todo-list.png'
import myPortfolio from '../dist/img/my-portfolio.png'
import coronaOyy from '../dist/img/coronaOyy.png'

import iconProjecWeb from '../dist/img/web-project-link.svg'
import iconProjectGithub from '../dist/img/github-project-link.svg'
import iconProjectFigma from '../dist/img/figma-project-link.svg'


export const headerLinks = [
    {
        path: '/',
        text: 'home',

    },
    {
        path: '/about',
        text: 'about',

    },
    {
        path: '/portfolio',
        text: 'portfolio',

    },
    {
        path: '/contact',
        text: 'contact',

    },
]


// contact section
export const contactData = {
    title: 'contact',
    emailIcon: emailIcon,
    emailAccount: 'delumenaljon@gmail.com',

    phoneIcon: phonelIcon,
    phoneNumber: '0907-345-9009'

}


// Hero Sectopm
export const heroData = {
    heading: 'i am aljon',
    subHeading: 'frontend web developer',
    paragraph: 'I am a Front-end Developer who also likes to play around with UI/UX',
}

export const aboutData = {
    title: 'about me',
    img: aboutImg,
    heading: 'aljon m de lumen',

    paragraphs: [
        'I am currently taking a Bachelor of Computer Science from the AMA Computer College East Rizal Campus.',
        'I like to create projects and put them on Github.',
        'I love building websites and am always looking forward to improving my skills.',
        'I like to develop any kind of project. Seeking Internship.',
        'I am interested in exploring the fields of Software Engineering and Web Development. Feel free to reach me directly at delumenaljon@gmail.com.',
    ],


}

// Education section
export const educationData = {
    title: 'education',

    schools: [
        {
            year: '2020-present',
            name: 'AMA Computer College East Rizal Campus',
            address: 'Marikina-Infanta Hwy, Antipolo, 1870 Rizal',
        },

        {
            year: '2018-2020',
            name: 'ICCT Colleges Taytay Satellite Campus',
            address: '128 Cabrera Rd, Taytay, 1920 Rizal',
        }
    ]
}


// skills section
export const skillsData = [
    html,
    css,
    javascript,
    bootstrap,
    sass,
    react,
    jquery,
    npm,
    figma,
    git,
    github,
    vscode,
    wordpress,
    command,
    stackoverflow
]

// portfolio section
export const portfolioData = {
    title: 'portfolio',

    projects: [
        {
            projectName: 'restaurant template',
            projectDetail: 'My restaurant template is a simple static website built without any additional frameworks. My css is inspired  by bootstrap framework.',
            projectLink: 'https://my-restaurant-template-git-main.aljonnnnn.vercel.app/',
            projectImg: restaurant,
            techUse: ['html', 'css', 'javascript'],

            
            iconLinks: [
                'https://my-restaurant-template-git-main.aljonnnnn.vercel.app/',
                'https://github.com/aljonnnnn/my-restaurant-template',
                'https://www.figma.com/file/qnl6eD5MLnmRxEOrQIAghJ/Restaurant-Template?node-id=0%3A1',
            ],

            iconImgs: [
                iconProjecWeb,
                iconProjectGithub,
                iconProjectFigma,
            ]
        },
        
        {
            projectName: 'Halaka Bootstrap Template',
            projectDetail: 'Halaka is inspired by Arsha bootstrap template.  It was a great experience for me to build using bootstrap, aos animate and scrollit js.',
            projectLink: 'https://halaka-bootstrap-template-aljonnnnn.vercel.app/',
            projectImg: halaka,
            techUse: ['html', 'css', 'javascript', 'bootstrap'],

        
            webLink: 'https://halaka-bootstrap-template.aljonnnnn.vercel.app/',
            githubLink: 'https://github.com/aljonnnnn/halaka-bootstrap-template',
            figmaLink: 'https://www.figma.com/file/3CoJNJBPeGlZnvbxfZntep/Bootstrap-Template?node-id=0%3A1',

            iconLinks: [
                'https://halaka-bootstrap-template.aljonnnnn.vercel.app/',
                'https://github.com/aljonnnnn/halaka-bootstrap-template',
                'https://www.figma.com/file/3CoJNJBPeGlZnvbxfZntep/Bootstrap-Template?node-id=0%3A1',
            ],
           
            iconImgs: [
                iconProjecWeb,
                iconProjectGithub,
                iconProjectFigma,
            ]
        },
        
        {
            projectName: 'to-do list',
            projectDetail: 'Todo List application that you can list your task today. This project was a great experience for me to enhance my HTML Dom manipulation.',
            projectLink: 'https://my-to-do-blush.vercel.app/',
            projectImg: todoList,
            techUse: ['html', 'scss', 'javascript'],

            iconLinks: [
                'https://my-to-do-blush.vercel.app/',
                'https://github.com/aljonnnnn/my-to-do',
            ],

            iconImgs: [
                iconProjecWeb,
                iconProjectGithub,
            ]
        },

        {
            projectName: 'who pay',
            projectDetail: 'Who pay application is you can add name and click who pay button then display the unlucky name who gonna pay the bill.',
            projectLink: 'https://who-pay-aljonnnnn.vercel.app/',
            projectImg: whoPay,
            techUse: ['html', 'scss', 'react js'],

            iconLinks: [
                'https://who-pay-aljonnnnn.vercel.app/',
                'https://github.com/aljonnnnn/who-pay',
            ],
           
            iconImgs: [
                iconProjecWeb,
                iconProjectGithub,
            ]
        },
        
        {
            projectName: 'my portfolio',
            projectDetail: 'My portfolio is a simple static website mobile first  and more inspire for my self while creating this website.',
            projectLink: 'https://delumenaljon-portfolio.vercel.app/',
            projectImg: myPortfolio,
            techUse: ['react js', 'scss',],

            
            webLink: 'https://delumenaljon-portfolio.vercel.app/',
            githubLink: 'https://github.com/aljonnnnn/Portfolio',
            figmaLink: 'https://www.figma.com/file/Bu61EPDaogz7mE86CQqAxS/Portfolio?node-id=0%3A1',

            iconLinks: [
                'https://delumenaljon-portfolio.vercel.app/',
                'https://github.com/aljonnnnn/Portfolio',
                'https://www.figma.com/file/Bu61EPDaogz7mE86CQqAxS/Portfolio?node-id=0%3A1',
            ],

            iconImgs: [
                iconProjecWeb,
                iconProjectGithub,
                iconProjectFigma,
            ]
        },
        {
            projectName: 'CoronaOyy',
            projectDetail: 'CoronaOyy is a web application that tracks the current Covid-19 cases all over the globe. Great practice for fetch api',
            projectLink: 'https://covidoyy.vercel.app/',
            projectImg: coronaOyy,
            techUse: ['react js', 'scss', 'web api', 'framer motion'],

            
            webLink: 'https://covidoyy.vercel.app/',
            githubLink: 'https://github.com/aljonnnnn/coronaoyy',
            figmaLink: 'https://www.figma.com/file/tztxAoWedvcgnQyKfoy8UQ/CoronaOyy?node-id=0%3A1',

            iconLinks: [
                'https://covidoyy.vercel.app/',
                'https://github.com/aljonnnnn/coronaoyy',
                'https://www.figma.com/file/tztxAoWedvcgnQyKfoy8UQ/CoronaOyy?node-id=0%3A1',
            ],

            iconImgs: [
                iconProjecWeb,
                iconProjectGithub,
                iconProjectFigma,
            ]
        },
    ]
}

