const Routes = {
  home: {
    path: './Home/index.js'
  },
  create: {
    path: 'routes/Create',
    auth: true
  },
  search: {
    path: 'routes/Search'
  },
  results: {
    path: 'routes/Results'
  },
  summary: {
    path: 'routes/Summary'
  },
  mywalks: {
    path: 'routes/MyWalks',
    auth: true
  },
  signin: {
    path: 'components/Auth/Signin'
  },
  signup: {
    path: 'components/Auth/Signup'
  },
  about: {
    path: 'routes/About'
  },
  test: {
    path: 'routes/Test'
  },
  walking: {
    path: 'routes/Walking'
  },
  coming: {
    path: 'routes/Coming'
  }
};

export default Routes;