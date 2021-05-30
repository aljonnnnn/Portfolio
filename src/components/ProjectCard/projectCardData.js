import restaurant from '../../assets/img/resturant-template.png'
import halaka from '../../assets/img/halaka-bootstrap-template.png'
import whoPay from '../../assets/img/who-pay.png'
import todoList from '../../assets/img/todo-list.png'
import myPortfolio from '../../assets/img/my-portfolio.png'
import coronaOyy from '../../assets/img/coronaOyy.png'

import iconProjecWeb from '../../assets/img/web-project-link.svg'
import iconProjectGithub from '../../assets/img/github-project-link.svg'
import iconProjectFigma from '../../assets/img/figma-project-link.svg'


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
            techUse: ['react js', 'react router dom','styled-components',],

            
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

