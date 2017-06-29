module.exports = {
  app: {
    backendBaseURL: 'https://jsonplaceholder.typicode.com',
    backendBasePath: '/',
    useMocks: false,
  },
  port: process.env.PORT || 8080, // set 80 for real production
};
