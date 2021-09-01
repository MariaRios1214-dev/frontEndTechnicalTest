import React from 'react';
import { render } from '@testing-library/react';

import Button from './button';

describe('<Button />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Button
        children="Button Text"
        buttonId="buttonText"
        onClick={() => {}}
        disabled={false}
        type="primary"
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render children', async () => {
    const renderedButton = await render(
      <Button
        children="Children"
        buttonId="buttonChildren"
        onClick={() => {}}
        disabled={false}
        type="primary"
      />
    );
    const buttonElelement = renderedButton.container.querySelector('button');
    expect(buttonElelement.textContent).toMatch('Children');
  });
});
