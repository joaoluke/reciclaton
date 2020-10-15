import React from "react";
import Header from "../index";
import Renderer from "react-test-renderer";

it("Renderer test from Header", () => {
    const tree = Renderer.create(<Header/>)
    .toJSON();

    expect(tree).toMatchSnapshot();
})