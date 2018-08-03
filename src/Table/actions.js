import {Async, Sync} from 'redux-action-boilerplate';

export const async = new Async({
  prefix: 'table',
  actions: [],
});

export const sync = new Sync({
  prefix: 'table',
  actions: [
    'changeData',
  ],
});


