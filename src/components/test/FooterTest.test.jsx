import {render} from '@testing-library/react';
import { expect } from 'vitest';

import Button from "../Atoms/Button";
import Logo from "../Atoms/Logo";
import LogoWhite from "../../assets/logoWhite.png"

import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Tweeter from "../../assets/tweeter.png"
import TikTok from "../../assets/tik-tok.png"


describe("Footer Images test", () => {
  beforeEach(() => {
    render(
      <footer>
            <Logo style="logoFooter" source={LogoWhite} description={"Company Logo"}/>
            <div>
                <img src={Instagram} alt="Logo de Instagram" />
                <img src={Facebook} alt="Logo de Facebook" />
                <img src={Tweeter}alt="Logo de Tweeter" />
                <img src={TikTok} alt="Logo de Tik-Tok" />
            </div>
            <div>
                <Button style= "btn btnOrange" text = "Language"/>
                <Button style= "btn btnOrange" text = "Log Out"/>
            </div>
        
        </footer>
    );
  });

  test("The Intagram img should have a source of Instagram", () => {
    const imgElement = document.querySelector('img[alt="Logo de Instagram"]')
    expect(imgElement.src).toBe("http://localhost:3000/src/assets/instagram.png");
  });

  test("The Facebook img should have a source of Facebook", () => {
    const imgElement = document.querySelector('img[alt="Logo de Facebook"]')
    expect(imgElement.src).toBe("http://localhost:3000/src/assets/facebook.png");

  });
  
  test("The Tweeter img should have a source of Tweeter", () => {
    const imgElement = document.querySelector('img[alt="Logo de Tweeter"]')
    expect(imgElement.src).toBe("http://localhost:3000/src/assets/tweeter.png");
  });
  
  test("The Tik-Tok img should have a source of Tik-Tok", () => {
    const imgElement = document.querySelector('img[alt="Logo de Tik-Tok"]')
    expect(imgElement.src).toBe("http://localhost:3000/src/assets/tik-tok.png");
  });
  
  test("The img should have a description", () => {
    const imgElement = document.querySelectorAll('img');
    imgElement.forEach(img=> {
      expect(img.alt).toBeDefined();
      expect(img.alt).toBeTruthy();
    });
    
  });

  test("The img should have a source route", () => {
    const imgElement = document.querySelectorAll('img');
    imgElement.forEach(img=> {
      expect(img.src).toBeDefined();
      expect(img.src).toBeTruthy();
    });
    console.log(imgElement)
  });
})

