import React from 'react';
import {
  StyledPerfilDiv,
  StyledImgRankCenter,
  StyledUserImage,
  StyledRankUser,
  InfoDiv,
  StyledReportDiv,
  ReportButton,
  FuncButton,
  StyledPerfilMaterials,
  StyledMaterials

} from "../styled";
import renderer from 'react-test-renderer';

it("render styledPerfilDiv", () => {
  const tree = renderer.create(<styledPerfilDiv />).toJSON();
  expect(tree).toMatchSnapshot();
})

it("render StyledImgRankCenter", () => {
  const tree = renderer.create(<StyledImgRankCenter />).toJSON();
  expect(tree).toMatchSnapshot();
})

it("render StyledUserImage", () => {
  const tree = renderer.create(<StyledUserImage />).toJSON();
  expect(tree).toMatchSnapshot();
})

it("render StyledRankUser", () => {
  const tree = renderer.create(<StyledRankUser />).toJSON();
  expect(tree).toMatchSnapshot();
})

it("render InfoDiv", () => {
  const tree = renderer.create(<InfoDiv />).toJSON();
  expect(tree).toMatchSnapshot();
})

it("render StyledReportDiv", () => {
  const tree = renderer.create(<StyledReportDiv />).toJSON();
  expect(tree).toMatchSnapshot();
})

it("render ReportButton", () => {
  const tree = renderer.create(<ReportButton />).toJSON();
  expect(tree).toMatchSnapshot();
})

it("render FuncButton", () => {
  const tree = renderer.create(<FuncButton />).toJSON();
  expect(tree).toMatchSnapshot();
})

it("render StyledPerfilMaterials", () => {
  const tree = renderer.create(<StyledPerfilMaterials />).toJSON();
  expect(tree).toMatchSnapshot();
})

it("render StyledMaterials", () => {
  const tree = renderer.create(<StyledMaterials />).toJSON();
  expect(tree).toMatchSnapshot();
})