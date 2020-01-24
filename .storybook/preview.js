
import '../main.css';
import '../bootstrap-grid.css';
import '../bootstrap.css'
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo({
  inline: true
}));

addDecorator(withKnobs);
