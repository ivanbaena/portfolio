import App from './app';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Admin from './pages/admin';

export const Routes = [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
      {
        ...Admin,
        path: '/admin',
        exact: true,
      },
      {
        ...NotFound,
      },
    ],
  },
];
