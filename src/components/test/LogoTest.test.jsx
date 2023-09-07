import {render, screen} from '@testing-library/react';
import { expect } from 'vitest';
import Logo from '../Atoms/Logo';
import LogoWhite from "../../assets/logoWhite.png"

describe("Logo props and render test", () => {
  beforeEach(() => {
    render(
      <Logo style="logoFooter" source={LogoWhite} description={"Company Logo"}/>
    );
  });

  
  test("The img should have a source", () => {
    const imgElement = document.querySelector('img');
    expect(imgElement.src).toBeDefined();
  });
  test("The img should have a description", () => {
    const imgElement = document.querySelector('img');
    expect(imgElement.alt).toContain("Company Logo");
  });
  test("The img should have a class", () => {
    const imgElement = document.querySelector('img');
    expect(imgElement.className).toContain("logoFooter");
  })
})