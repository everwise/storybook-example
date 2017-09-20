import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, select } from '@kadira/storybook-addon-knobs';

import { NavigationButton } from '../src/components';

storiesOf('NavigationButton', module)
  .addDecorator(withKnobs)
  .add('to Storybook', () => (
    <NavigationButton
      direction={select('direction', ['next', 'prev'], 'next')}
    />
  ));
