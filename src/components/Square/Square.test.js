import React from 'react';
import { shallow } from 'enzyme';
import Square from './Square'


describe("should have a grid", () => {
    const wrapper = shallow(<Square />);
    it("should have a pawn after click", () => {
        const square = wrapper.find('.square');
        square.simulate("click");
        expect(square).toEqual({});

    })

})