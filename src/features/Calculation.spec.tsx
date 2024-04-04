import React from "react";
import { render } from "@testing-library/react";
import { Calculation } from "./Calculation";

test("renders without crashing", () => {
  let calc = new Calculation([3, 4, 5], [3, 4, 5], "add");

  expect(calc.show()).toStrictEqual([6, 8, 10]);
});

test("renders without crashing", () => {
  let calc = new Calculation([3, 4, 5], [3, 4, 5], "substraction");

  expect(calc.show()).toStrictEqual([0, 0, 0]);
});

test("renders without crashing", () => {
  let calc = new Calculation([3, 4, 5], [3, 4, 5], "scalar multiply");

  expect(calc.show()).toStrictEqual([50]);
});