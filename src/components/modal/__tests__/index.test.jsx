import React from "react";
import Modal from "../index";
import Renderer from "react-test-renderer";

it("Renderer test from Header", () => {
    const tree = Renderer.create(<Modal/>)
    .toJSON();

    expect(tree).toMatchSnapshot();
})