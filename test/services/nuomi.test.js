var nuomi = require('../../services/nuomi');
var should = require('should');
require('../support');

describe('services/nuomi.test.js', function() {

	it('spider Nuomi', function(done) {
		var e;
		try{
			nuomi.getNuomiData(function(){
				done();
			});
		}catch(err){
			e=err;
		}
		should(e).not.be.ok();
	});
});