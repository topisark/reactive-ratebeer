import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { Link, MemoryRouter } from 'react-router-dom';
import Navbar from '../../src/components/navbar/index';

const mainRoute = {
  label: 'Landing page',
  path: '/',
  component: <div />
};

const routes = [
  {
    label: 'Bar',
    path: '/bar',
    component: <div />
  },
  {
    label: 'Foo',
    path: '/foo',
    component: <div />
  }
];

describe('Navbar', () => {

  test('can be created without nav links', () => {
    const renderer = ReactTestRenderer.create(
      <MemoryRouter>
        <Navbar mainRoute={mainRoute} />
      </MemoryRouter>
    );
    expect(renderer.root).toBeDefined();
  });

  test('renders correct links', () => {
    const renderer = ReactTestRenderer.create(
      <MemoryRouter>
        <Navbar mainRoute={mainRoute} routes={routes} />
      </MemoryRouter>
    );
    const links = renderer.root.findAllByType(Link);
    const expectedLinks = [...routes.map(route => route.path), mainRoute.path];
    links.forEach(link => {
      expect(expectedLinks).toContain(link.props.to);
    });
  });

});

