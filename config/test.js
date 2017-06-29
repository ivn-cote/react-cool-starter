module.exports = {
  app: {
    backendBaseURL: 'http://localhost/',
    backendBasePath: '/mockapi',
    mockPath: 'mockapi',
    useMocks: true,
  },
  port: process.env.PORT || 3000, // set 80 for real production
};
