var User = require('../../proxy/user');
var should = require('should');
require('../support');

describe('sprider/proxy/user.test.js', function() {
	it('create user', function(done) {
		//name, loginname, pass, email,profileImageUrl, retrieveKey,openId,location, callback
		User.newAndSave('jwq', 'jwq', '123456', '46602907@qq.com', '', false, 'openId', '地址', function(err) {
			should(err).not.be.ok();
			done();
		});
	});
	var quser;
	it('getUserByLoginName  loginName=jwq', function(done) {
		User.getUserByLoginName('jwq', function(err, user) {
			user.loginName.should.eql('jwq');
			quser = user;
			done();
		});
	});
	it('removeUserById', function(done) {
		User.removeById(quser.id, function(err) {
			should(err).not.be.ok();
			done();
		});
	});
});