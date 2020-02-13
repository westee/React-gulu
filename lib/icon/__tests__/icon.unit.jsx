import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../../icon/icon';

describe('icon test', ()=>{
    it('是个svg', ()=>{
        const json = renderer.create(<Icon iconName="wechat"/>).toJSON();
        expect(json).toMatchSnapshot()
    })
})