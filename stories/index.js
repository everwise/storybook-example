import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, boolean, text } from '@storybook/addon-knobs';
import {
  Button,
  Table,
} from 'react-bootstrap';

// styling must be imported since react-bootstrap does not automatically include styling
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const buttonStyles = ['default', 'primary', 'success', 'info', 'warning', 'danger', 'link'];
const sizes = ['xs', 'sm', undefined, 'lg'];

storiesOf('Buttons', module)
  .addWithJSX('Button', () => (
    <Table striped bordered>
      <thead>
        <tr>
          <td />
          {buttonStyles.map(style => (
            <th key={style}>{style}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sizes.map(size => (
          <tr key={size}>
            <th>{size || '(default)'}</th>
            {buttonStyles.map(style => (
              <td key={style}>
                <Button
                  bsStyle={style}
                  bsSize={size}
                  onClick={action('click')}
                  disabled={boolean('disabled', false)}
                >
                  {text('text', 'Submit')}
                </Button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  ));

storiesOf('Page layout', module)
  .addWithJSX('Table', () => (
    <Table
      striped={boolean('striped', false)}
      bordered={boolean('bordered', false)}
      condensed={boolean('condensed', false)}
      hover={boolean('hover', false)}
    >
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Desired Superpower</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Rocky</td>
          <td>Meza</td>
          <td>Flying</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Christian</td>
          <td>Cho</td>
          <td>Mind Control</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Cooper the Dog</td>
          <td>Eating all the things</td>
        </tr>
      </tbody>
    </Table>
  ));
