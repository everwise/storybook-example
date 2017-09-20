import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import {
  NavigationButton,
} from '../src/components';

storiesOf('NavigationButton', module)
  .addDecorator(withKnobs)
  .add('button', () => (
    <NavigationButton
      direction={select('direction', ['prev', 'next'], 'prev')}
      disabled={boolean('disabled', false)}
      onClick={action('click!')}
    />
  ));
