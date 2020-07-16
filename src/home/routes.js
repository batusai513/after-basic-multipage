import React from 'react';
import { asyncComponent } from '@jaredpalmer/after';

export default [
  {
    path: '/',

    component: asyncComponent({
      loader: () => import('../components/home/Home'), // required
      Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
    }),
  },
];
