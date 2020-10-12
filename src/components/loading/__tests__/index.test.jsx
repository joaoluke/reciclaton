import React from 'react';
import Loading from '../';
import renderer from 'react-test-renderer';

it("render", () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
})