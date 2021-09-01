import React from 'react';
import { render } from '@testing-library/react';

import Message from './message';

describe(' Message', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Message messageType="danger" messageText="This is a danger alert" />
    );
    expect(baseElement).toBeTruthy();
  });
});
