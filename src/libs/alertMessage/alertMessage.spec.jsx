import React from 'react';
import { render } from '@testing-library/react';

import AlertMessage from './alertMessage';

describe(' Message', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AlertMessage messageType="danger" messageText="This is a danger alert" />
    );
    expect(baseElement).toBeTruthy();
  });
});
