import React from 'react';
import { storiesOf } from '@storybook/react';

import AlertMessage from './alertMessage';

storiesOf('AlertMessage', module)
  .add('Danger', () => (
    <AlertMessage messageType="danger" messageText="This is a danger alert" />
  ))
  .add('Success', () => (
    <AlertMessage messageType="success" messageText="This is a succes alert" />
  ))
  .add('Info', () => (
    <AlertMessage messageType="info" messageText="This is a info alert" />
  ))
  .add('Warning', () => (
    <AlertMessage messageType="warning" messageText="This is a warning alert" />
  ));
