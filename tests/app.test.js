import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/app';

const app = (
  <MemoryRouter>
    <App />
  </MemoryRouter>
);

describe('App', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(app, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});