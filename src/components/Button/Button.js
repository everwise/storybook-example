import React from 'react';
import cn from 'classnames';

import './Button.css';

export default (props) => (
  <button
    className={cn(props.className, 'Button')}
    onClick={props.onClick}
  >
    {props.text}
  </button>
);
