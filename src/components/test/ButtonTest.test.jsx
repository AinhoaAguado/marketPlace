import {render, screen} from '@testing-library/react';
import Button from '../Atoms/Button';
import { expect } from 'vitest';

describe("Button Props and render Tests", () => {
  beforeEach(() => {
    render(
      <Button text="Button" style="btnRed" type="submit" />
    );
  });

  test("Should render a button with a Button text", () => {
    expect(screen.getByText('Button')).toBeDefined();
  });

  test("Should have a btnRed html class", () => {
    const buttonElement = screen.getByText('Button');
    expect(buttonElement.className).toContain('btnRed');
  });

  test("Should have a type of submit", () => {
    const buttonElement = screen.getByText('Button');
    expect(buttonElement.getAttribute('type')).toBe('submit');
  });
});