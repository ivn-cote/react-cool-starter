module.exports = {
  host: process.env.NODE_HOST || 'localhost',
  port: process.env.PORT || 3000,
  mockPath: 'mockapi',

  app: {
    backendBaseURL: `${process.env.NODE_HOST || 'http://localhost'}:${process.env.PORT || 3000}/`,
    backendBasePath: 'mockapi/',
    htmlAttributes: { lang: 'en' },
    title: 'Not Bad React Starter',
    titleTemplate: 'Not Bad React Starter - %s',
    meta: [
      {
        name: 'description',
        content: 'The best not bad React boilerplate in the world.',
      },
    ],
  },
};
