import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Maquina = React.lazy(() => import('./views/Base/Maquina'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/maquina', name: 'Maquina', component: Maquina },
  { path: '/base/tables', name: 'Tables', component: Tables },
];

export default routes;
