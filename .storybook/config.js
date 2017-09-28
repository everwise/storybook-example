import { configure, addDecorator, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';

function loadStories() {
  require('../stories/index.js');
  const req = require.context('../src', true, /.stories.js$/);
  req.keys().forEach(filename => req(filename));
}

setAddon(JSXAddon);
addDecorator(withKnobs);

configure(loadStories, module);
