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
		setTimeout(function(){
			done();
		},4000)
		should(e).not.be.ok();
	});
});