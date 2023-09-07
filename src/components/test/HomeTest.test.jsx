import {render,screen} from '@testing-library/react';
import { expect } from 'vitest';

describe("Button Props and render Tests", () => {
    beforeEach(() => {
        const Info =
            [
              {
                "id": 1,
                "title": "Desarrollo Web - FrontEnd Web Developer",
                "description": "In this course we will learn how to create Web applications from Zero to Expert, using HTML, CSS and JavaScript with the latest versions as of today! You will learn absolutely from scratch HTML, CSS and JavaScript with the goal of creating amazing Web applications.",
                "price": "9.99€"
              },
              {
                "id": 2,
                "title": "Master in Fullstack Web Developer",
                "description": "Program JavaScript web sites and applications with TypeScript, you will learn how to develop both the frontend and the backend of your application.",
                "price": "12.99€"
              }
            ]

      render(
            <main>
              <h1 className='user-name'>BIENVENIDO<span className='text-orange'> SERGIO</span></h1>
              <button className='button__add-course'>Add Course</button>
              <ul className='card__container'>
                {Info.map(infoi => (
                  <li key = {infoi.id} className='card'>
                    <div className='card__texts'>
                    <div className='card__title'>
                    {infoi.title}
                    </div>
                    <div className='card__price'>
                    {infoi.price}
                    </div>
                    <div className='card__subtitle'>
                    {infoi.subtitle}
                    </div>
                    <div className='card__description'>
                    {infoi.description}
                    </div>
                    <button className='button__edit'>Edit</button>
                    <button className='button__post'>Post</button>
                    </div>
                    </li>
                  ))}
              </ul>
            </main>
        );
    })
    test("Test if the Welcome text renders correctly",() => {
        expect(screen.getByText('BIENVENIDO')).toBeDefined();
    });
    test("Test if the addCourse Button renders correctly",() => {
        expect(screen.getByText('Add Course')).toBeDefined();
    });

    test("Test if the card title renders correctly",() => {
        expect(screen.getByText('Desarrollo Web - FrontEnd Web Developer')).toBeDefined();
    });
    test("Test if the card description renders correctly",() => {
        expect(screen.getByText('In this course we will learn how to create Web applications from Zero to Expert, using HTML, CSS and JavaScript with the latest versions as of today! You will learn absolutely from scratch HTML, CSS and JavaScript with the goal of creating amazing Web applications.')).toBeDefined();
    });
    test("Test if the price renders correctly",() => {
        expect(screen.getByText('9.99€')).toBeDefined();
    });
    
    //Second list of components.
    test("Test if the 2nd card title renders correctly",() => {
        expect(screen.getByText('Master in Fullstack Web Developer')).toBeDefined();
    });
    test("Test if the 2nd card description renders correctly",() => {
        expect(screen.getByText('Program JavaScript web sites and applications with TypeScript, you will learn how to develop both the frontend and the backend of your application.')).toBeDefined();
    });
    test("Test if the 2nd price renders correctly",() => {
        expect(screen.getByText('12.99€')).toBeDefined();
    });
    
})