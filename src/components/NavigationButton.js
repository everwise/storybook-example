import React from 'react';
import cn from 'classnames';

import './NavigationButton.css';

const NavigationButton = ({ direction, onClick, disabled }) => (
  <button
    className={cn(
      direction,
      'NavigationButton',
      { disabled }
    )}
    onClick={onClick}
    disabled={disabled}
  />
);

export default NavigationButton;
