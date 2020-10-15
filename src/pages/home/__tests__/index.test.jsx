import React from "react";
import Home from "../index";
import Renderer from "react-test-renderer";

it("Renderer test from Header", () => {
    const tree = Renderer.create(<Home/>)
    .toJSON();

    expect(tree).toMatchSnapshot();
})