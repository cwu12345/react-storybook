import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const Action = () => (
  <Button onClick={action("button-click")}>
    {text("Label", "Submit")}
  </Button>
);
