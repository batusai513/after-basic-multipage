import React from 'react';
import { asyncComponent } from '@jaredpalmer/after';

export default [
  {
    path: '/about',
    component: asyncComponent({
      loader: () => import('../components/about/About'), // required
      Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
    }),
  },
];
