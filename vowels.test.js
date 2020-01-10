const reverseVowels = require('./vowels');

describe('test vowel reverse', () => {
    test('input alphabet should return elphabat', () => {
        expect(reverseVowels('alphabet')).toBe('elphabat');
    });
}) 