const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'test1',
			room: 'room1'
		}, {
			id: '2',
			name: 'test2',
			room: 'room2'
		}, {
			id: '3',
			name: 'test3',
			room: 'room1'
		}];
	});

	it('should add a new user', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'testName',
			room: 'testRoom'
		};
		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should remove a user', () => {
		var userId = '1';
		var user = users.removeUser(userId);

		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should not remove a user', () => {
		var userId = '4';
		var user = users.removeUser(userId);

		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it('should find a user', () => {
		var userId = '2';
		var user = users.getUser(userId);
		expect(user.id).toBe(userId);
	});

	it('should not find a user', () => {
		var userId = '4';
		var user = users.getUser(userId);
		expect(user).toNotExist();
	});

	it('should return names for room1', () => {
		var userList = users.getUserList('room1');

		expect(userList).toEqual(['test1', 'test3']);
	});

	it('should return names for room2', () => {
		var userList = users.getUserList('room2');

		expect(userList).toEqual(['test2']);
	});

});