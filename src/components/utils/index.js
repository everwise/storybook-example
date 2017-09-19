import { flow, capitalize, replace } from 'lodash/fp';

export const namefy = flow(
  replace('-', ' '),
  capitalize
);
