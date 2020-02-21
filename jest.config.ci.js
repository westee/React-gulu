import base from './jest.config';

module.exports = Object.assign({}, base,
    {
        collectCoverage: false,
        reporters: ['default', 'jest-junit']
    });

