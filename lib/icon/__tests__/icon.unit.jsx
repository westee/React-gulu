/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../../icon/icon';
import {mount} from 'enzyme';

describe('icon test', () => {
    it('是个svg', () => {
        const json = renderer.create(<Icon iconName="wechat"/>).toJSON();
        expect(json).toMatchSnapshot();
    });

    it('被点击', () => {
        const fn = jest.fn();
        const fn2 = jest.fn();
        const component = mount(<Icon iconName="wechat" onClick={fn}/>);
        component.find('svg').simulate('click');
        expect(fn).toBeCalled();
    });
});