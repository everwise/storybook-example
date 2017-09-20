import React from 'react';
import cn from 'classnames';

import './NavigationButton.css';

const NavigationButton = ({ direction, size }) => (
  <button
    className={cn(size, direction, 'NavigationButton')}
  />
);

export default NavigationButton;
