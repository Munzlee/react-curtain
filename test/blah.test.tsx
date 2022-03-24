import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Curtain } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Curtain automaticOpening={true}><div>test</div></Curtain>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
