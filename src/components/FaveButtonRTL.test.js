import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

    test('changes colour of star when clicked', () => {
        let starSpan = component.getByRole("switch")
        let initColour = starSpan.style.color
        userEvent.click(starSpan)
        let clickedColour = starSpan.style.color
        expect(clickedColour).not.toBe(initColour)
    })
})