import React from 'react';
import { shallow } from 'enzyme';
import Game from './Game.js'


describe("should have a grid", () => {
    const wrapper = shallow(<Game />);
    it("should have 8 columns and 8 rows", () => {
        expect(wrapper.find('.square')).toEqual({});

    })

})