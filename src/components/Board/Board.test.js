import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board'


describe("should have a grid", () => {
    const wrapper = shallow(<Board />);

    it("should render 8 columns with 8 arrays in state", () => {
        const row = wrapper.find('.row');
        expect(row.length).toEqual(8);

    })
    it("should render 8 columns with 8 elements in state", () => {
        const column = wrapper.find('.column');
        expect(column.length).toEqual(64);
    })
    it("should have state", () => {

        expect(wrapper.state().board).toEqual([
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 2, 0, 0, 0],
            [0, 0, 0, 2, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ]);
    })


})