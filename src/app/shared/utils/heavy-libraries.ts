import _ from 'lodash';

import moment from 'moment';

import $ from 'jquery';

import * as rxjs from 'rxjs';

export const heavyLibraries = {
  lodash: _,
  moment: moment,
  jquery: $,
  rxjs: rxjs
};

export function useHeavyLibraries() {
  const numbers = _.map([1, 2, 3], n => n * 2);

  const today = moment().format('YYYY-MM-DD');

  const $body = $('body');

  const obs = new rxjs.Observable();

  return { numbers, today, body: $body, obs };
}

console.log('Heavy libraries loaded:', Object.keys(heavyLibraries));
