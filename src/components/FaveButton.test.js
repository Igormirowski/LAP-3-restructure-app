import FaveButton from './FaveButton';

describe('FaveButton', () => {
    let component;

    beforeEach(() => {
        component = shallow(<FaveButton />)
    })

    test('renders a span with a star (★) in it', () => {
        let starSpan = component.find('span')
        expect(starSpan.text()).toContain('★')
    })

    test('changes colour of star when clicked', () => {
        let fakeEvent = { stopPropagation: () => "do nothing" }
        let starSpan = component.find('span')
        let initColour = starSpan.prop('style').color;
        starSpan.simulate('click', fakeEvent)
        expect(starSpan.prop('style').color).not.toBe(!initColour)
    })
})