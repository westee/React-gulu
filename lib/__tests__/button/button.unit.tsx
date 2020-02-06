// test('button', () => {
//     expect(1).toEqual(2);
// });
import renderer from 'react-test-renderer';
import Button from '../../button';

describe('button test', ()=>{
    it('是个div', ()=>{
        const json = renderer.create(Button()).toJSON();
        expect(json).toMatchSnapshot()
    })
})