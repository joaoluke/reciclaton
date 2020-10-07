import React from 'react';
import Layout from '..';
import renderer from 'react-test-renderer';

it("render", () => {
  const tree = renderer.create(<Layout><p>oii</p></Layout>).toJSON();
  expect(tree).toMatchSnapshot();
})
