const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non-string values', () => {
		var res = isRealString(1234);
		expect(res).toBe(false);
	});

	it('should reject whitespace string', () => {
		var res = isRealString('  ');
		expect(res).toBe(false);
	});

	it('should allow string with non-whitespace characters', () => {
		var res = isRealString('  My Name  ');
		expect(res).toBe(true);
	});
});
