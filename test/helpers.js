const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Leonardo Pratesi',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Leonardo Pratesi',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Leonardo Pratesi',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Leonardo Pratesi',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Leonardo Pratesi',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
