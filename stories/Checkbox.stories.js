import React from 'react';
import { render } from 'react-dom';
import Checkbox from '../components/form/checkbox.js';

export default {
  title: 'Checkbox',
  component: Checkbox,
};


// const instance = new Checkbox();
// export const result = () => instance.render(); // <p>Hello</p>

export const Tree = () => (
  render(<Checkbox/>,
  document.getElementById('root')));
