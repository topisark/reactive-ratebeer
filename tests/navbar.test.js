import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { Link, MemoryRouter } from 'react-router-dom';
import Navbar from '../src/components/navbar';

const routes = [
  {
    label: 'Landing page',
    path: '/',
    component: <div />
  },
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
        <Navbar />
      </MemoryRouter>
    );
    expect(renderer.root).toBeDefined();
  });

  test('renders correct links', () => {
    const renderer = ReactTestRenderer.create(
      <MemoryRouter>
        <Navbar routes={routes} />
      </MemoryRouter>
    );
    const links = renderer.root.findAllByType(Link);
    const expectedLinks = routes.map(route => route.path);
    links.forEach(link => {
      expect(expectedLinks).toContain(link.props.to);
    });
  });

});

