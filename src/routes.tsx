import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from './pages/layouts/app';
import { Home } from './pages/app/home';
import { Contact } from './pages/app/contact';

export const routes = createBrowserRouter([
  {
    path: '/carlosmaximo',
    element: <AppLayout />,
    children: [
      {
        path: '/carlosmaximo',
        element: <Home />,
      },
      {
        path: '/carlosmaximo/contact',
        element: <Contact />,
      },
    ],
  },
]);
