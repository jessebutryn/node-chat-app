var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		var from = 'testUser';
		var text = 'A message';
		var message = generateMessage(from, text);
		
		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, text});

	});
});

describe('generateLocationMessage', () => {
	it('should generate the correct location object', () => {
		var from = 'testUser';
		var latitude = 100;
		var longitude = -100;
		var url = 'https://www.google.com/maps?q=100,-100'
		var locationMessage = generateLocationMessage(from, latitude, longitude);

		expect(locationMessage.createdAt).toBeA('number');
		expect(locationMessage).toInclude({from, url});

	});
});