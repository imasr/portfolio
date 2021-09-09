/* eslint-disable prettier/prettier */
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: `https://imasr.github.io`,
  title: `Ashish Singh`,
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ashish Singh',
  role: 'Senior Software Engineer',
  description: `Results-focused and quality-driven professional with 4.8+ years of extensive experience in developing complete web &
    mobile applications, progressive web app (PWA) for modern rich internet applications`,
  resume:
    'https://drive.google.com/file/d/1iDU0ZtIYBJ2uuwD3gxhdfBnsgLPBGIpN/view',
  social: {
    linkedin: 'https://linkedin.com/in/imasr',
    github: 'https://github.com/imasr',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up

  'JavaScript',
  'TypeScript',
  'Angular',
  'Rxjs',
  'Ionic',
  'HTML',
  'CSS',
  'SASS',
  'Material UI',
  'Git',
  'Devextreme',
  'Bootstrap',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ashishs723@mail.com',
}

export { header, about, projects, skills, contact }
