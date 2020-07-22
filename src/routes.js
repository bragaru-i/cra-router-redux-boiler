import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';
const ROUTES = [
  { path: '/', key: 'ROOT', exact: true, component: HomePage },
  {
    path: '/jewellery',
    key: 'JEWELLERY',
    component: RenderRoutes,
    routes: [
      {
        path: '/jewellery',
        key: 'JEWELLERY_ROOT',
        exact: true,
        component: () => <h1>JEWELLERY Index</h1>,
      },
      {
        path: '/jewellery/rings',
        key: 'JEWELLERY_RINGS',
        exact: true,
        component: () => <h1>JEWELLERY Rings</h1>,
      },
      {
        path: '/jewellery/necklaces',
        key: 'JEWELLERY_NECKLACES',
        exact: true,
        component: () => <h1>JEWELLERY NECKLACES</h1>,
      },
      {
        path: '/jewellery/earrings',
        key: 'JEWELLERY_EARRINGS',
        exact: true,
        component: () => <h1>JEWELLERY Earrings</h1>,
      },
      {
        path: '/jewellery/charms-bracelets',
        key: 'JEWELLERY_CHARMS_BRACELETS',
        exact: true,
        component: () => <h1>JEWELLERY CHARMS_BRACELETS</h1>,
      },
    ],
  },
];
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

export default ROUTES;
