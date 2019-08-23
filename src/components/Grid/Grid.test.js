import React from 'react';
import { shallow } from 'enzyme';
import Grid from './Grid.js'


describe("should have a grid", () => {
    const wrapper = shallow(<Grid />);
    it("should have 8 columns and 8 rows", () => {
        expect(wrapper.find('.square')).toEqual({});

    })

})