import React from 'react';

import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import Hello from '../../src/modules/hello/index';

describe('Hello module / index component', () => {
  it('renders correctly', () => {
    const tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null = renderer
      .create(<Hello />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
