import React from 'react';
import { storiesOf } from '@storybook/react';

import Message from './message';

storiesOf('Message', module)
  .add('Danger', () => (
    <Message messageType="danger" messageText="This is a danger alert" />
  ))
  .add('Success', () => (
    <Message messageType="success" messageText="This is a succes alert" />
  ))
  .add('Info', () => (
    <Message messageType="info" messageText="This is a info alert" />
  ))
  .add('Warning', () => (
    <Message messageType="warning" messageText="This is a warning alert" />
  ));
