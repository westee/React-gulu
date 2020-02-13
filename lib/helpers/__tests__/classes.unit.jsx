import classes from '../classes';

describe('button', () => {
    it('接收一个参数', function () {
        const result = classes('a');
        expect(result).toEqual('a');
    });

    it('接收多个参数', function () {
        const result = classes('a','b');
        expect(result).toEqual('a b');
    });

    it('接收undefined,将其忽略', function () {
        const result = classes('a', undefined);
        expect(result).toEqual('a');
    });

    it('不传参', function () {
        const result = classes();
        expect(result).toEqual('');
    });
});
