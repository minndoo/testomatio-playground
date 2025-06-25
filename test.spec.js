import { describe, it, expect } from 'vitest';

describe('Math operations', () => {
    it('adds two numbers', () => {
        expect(1 + 2).toBe(3);
    });

    it('subtracts two numbers', () => {
        expect(5 - 3).toBe(2);
    });

    it('multiplies two numbers', () => {
        expect(4 * 2).toBe(8);
    });

    it('divides two numbers', () => {
        expect(10 / 2).toBe(5);
    });
});

describe('String operations', () => {
    it('concatenates two strings', () => {
        expect('Hello' + ' ' + 'World').toBe('Hello World');
    });

    it('checks string length', () => {
        expect('Vitest'.length).toBe(6);
    });
});