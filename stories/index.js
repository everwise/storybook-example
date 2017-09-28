import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Tooltip,
  OverlayTrigger,
  Nav,
  NavItem,
  Table,
  Panel,
} from 'react-bootstrap';

// styling must be imported since react-bootstrap does not automatically include styling
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const buttonStyles = ['success', 'warning', 'danger', 'info', 'default', 'primary', 'link'];
const sizes = ['xs', 'sm', undefined, 'lg'];

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
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
  ))
  .addWithJSX('ButtonGroup', () => (
    <ButtonGroup
      bsSize={select('bsSize', sizes)}
      vertical={boolean('vertical', false)}
      justified={boolean('justified', false)} // 
    >
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  ))
  .addWithJSX('ButtonToolbar', () => (
    <ButtonToolbar>
      <ButtonGroup bsSize={select('bsSize', sizes, 'md')}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </ButtonGroup>
      <ButtonGroup bsSize={select('bsSize', sizes, 'md')}>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
      </ButtonGroup>
      <ButtonGroup bsSize={select('bsSize', sizes, 'md')}>
        <Button>8</Button>
      </ButtonGroup>
    </ButtonToolbar>
  ));

const placements = ['top', 'right', 'bottom', 'left'];
const tooltip = (
  <Tooltip id="tooltip">
    Check this info.
  </Tooltip>
);

storiesOf('Overlays', module)
  .addDecorator(withKnobs)
  .addWithJSX('Tooltip', () => (
    <Tooltip
      id="tooltip-1"
      placement={select('placement', placements, 'right')}
      className="in"
    >
      {text('text', 'This is a tooltip.')}
    </Tooltip>
  ))
  .addWithJSX('with OverlayTrigger', () => (
    <OverlayTrigger
      placement={select('placement', placements, 'right')}
      overlay={tooltip}
      rootClose={boolean('rootClose', false)}
    >
      <Button bsStyle="default">Holy guacamole!</Button>
    </OverlayTrigger>
  ));

const navStyles = ['pills', 'tabs'];

storiesOf('Navs', module)
  .addDecorator(withKnobs)
  .addWithJSX('Nav', () => (
    <Nav
      bsStyle={select('bsStyle', navStyles, 'pills')}
      activeKey={1}
      onSelect={action('select')}
      stacked={boolean('stacked', false)}
    >
      <NavItem
        eventKey={1}
        href="/home"
      >
        NavItem 1 content
      </NavItem>
      <NavItem
        eventKey={2}
        title="Item"
      >
        NavItem 2 content
      </NavItem>
      <NavItem
        eventKey={3}
        disabled={boolean('disable item?', true)}
      >
        NavItem 3 content
      </NavItem>
    </Nav>
  ));

const panelStyles = ['primary', 'success', 'info', 'warning', 'danger', undefined];

storiesOf('Page layout', module)
  .addDecorator(withKnobs)
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
          <th>Twitter Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Rocky</td>
          <td>Meza</td>
          <td>@rockymeza</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Christian</td>
          <td>Cho</td>
          <td>@nycgogi</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Cooper the Dog</td>
          <td>@cooperthedog</td>
        </tr>
      </tbody>
    </Table>
  ))
  .addWithJSX('Panel', () => (
    <Panel
      bsStyle={select('bsStyle', panelStyles)}
      header={text('header')}
      footer={text('footer')}
      collapsible={boolean('collapsible', false)}
    >
      This is a panel
    </Panel>
  ));

  // TODO: Add another bootstrap component that we will demonstrate with
