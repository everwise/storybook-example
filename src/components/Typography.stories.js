import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import { P } from './Typography';

const colors = [
  '#fff',
  'aqua',
  'tomato',
  'rebeccapurple',
];

storiesOf('Typography', module)
  .addWithJSX('paragraph', () => (
    <P color={select('Colors', colors, 'aqua')}>Hello world!</P>
  ))