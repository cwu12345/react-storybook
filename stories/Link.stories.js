import React from 'react';
import  LinkTo  from '@storybook/addon-links/react';
import { action } from '@storybook/addon-actions';
import Link, {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button } from '@storybook/react/demo';
import { Text } from '../stories/1-Button.stories.js';

export default {
  title: 'Link',
  component: Link,
};

 export const first = () => (
  <LinkTo story="second">Go to Second</LinkTo>
);
export const second = () => (
  <LinkTo story="first">Go to First</LinkTo>
);
