var moment = require('moment');

var createdAt = 1234;

new Date().getTime();
var someTimestamp = moment().valueOf();
console.log(someTimestamp)

var date = moment(createdAt);
console.log(date.format('h:mm a'))