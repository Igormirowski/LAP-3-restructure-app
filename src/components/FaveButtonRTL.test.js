import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import FaveButton from './FaveButton';

describe('FaveButton', () => {
    let component;

    beforeEach(() => {
        component = render(<FaveButton />)
    })

    test('renders a span with a star (★) in it', () => {
        let starSpan = component.getByRole("switch")
        expect(starSpan.textContent).toBe('★')
    })

    // test('changes colour of star when clicked', () => {
    //     let fakeEvent = { stopPropagation: () => "do nothing" }
    //     let starSpan = component.find('span')
    //     let initColour = starSpan.prop('style').color
    //     starSpan.simulate('click', fakeEvent)
    //     let clickedColour = component.find('span').prop('style').color
    //     expect(clickedColour).not.toBe(initColour)
    // })
})