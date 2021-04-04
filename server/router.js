const controllers = require('./controllers');

const router = (app) => {
  app.get('/login', controllers.Account.loginPage);
  app.get('/login', controllers.Account.login);
  app.get('/signup', controllers.Account.signupPage);
  app.get('/signup', controllers.Account.signup);
  app.get('/logout', controllers.Account.logout);
  app.get('/maker', controllers.Domo.makerPage);
  app.get('/', controllers.loginPage);
};

module.exports = router;
