import React from 'react';
import renderer from 'react-test-renderer';
import Complaint from '../complaint-card';

it("render styledPerfilDiv", () => {
  const tree = renderer.create(<Complaint
    imgUrl="https://picsum.photos/200"
    complaintMsg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis dolor arcu, id aliquam enim bibendum euismod. Maecenas tempor diam justo, non lobortis purus vulputate vitae. Vestibulum rutrum scelerisque congue. Fusce vestibulum id augue et posuere. Pellentesque a ex semper, sagittis magna ac, sollicitudin sapien."
    reviews={3}
    concordoClick={() => console.log("concordo")}
    discordoClick={() => console.log("discordo")}
  />).toJSON();
  expect(tree).toMatchSnapshot();
})