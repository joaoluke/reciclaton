import React from "react";
import Modal from "../index";
import renderer from "react-test-renderer";

it("Modal Test", () => {
  const tree = renderer.create(<Modal>Ai ai esse CRL viu...</Modal>).toJSON();
  expect(tree).toMatchSnapshot();
});
