var async = require('async');
var superagent = require('superagent');
var cheerio = require('cheerio');
var Q = require('q');
require('colors');
var proxy = require('../proxy');

exports.getNuomiData = function(cb) {
	var agent = superagent.agent();
	var url = 'http://sh.nuomi.com/search/1%E5%85%83';
	var useragent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.99 Safari/537.36";

	agent.get(url)
	.set('Accept-Encoding','')
	.set('User-Agent',useragent)
	.end(function(err, res) {
		var deferred = Q.defer();
		//console.log(agent);
		if (err) {
			deferred.reject(err);
		} else {
			deferred.resolve(res);
		}
		return deferred.promise;
	}).then(function(res) {
		//爬去主页的内容
		var $ = cheerio.load(res.text);
		var listCard = $('li.j-card');
		listCard.each(function(i, elem) {
			var card = $(this);
			var imgURL = card.find('.borderbox > img').data('original');
			var contentbox = $(card.find('div.contentbox'));
			var openURL = contentbox.find('a').attr('href');
			var title = contentbox.find('a > h4.title').text();
			var content = contentbox.find('a > p').text();
			var price = contentbox.find('.pinfo > .price').text();
			var primePrice = contentbox.find('.ori-price > .price-line').text();
			var salesNum = contentbox.find('.footer > .sold').text();

			proxy.Goods.newAndSave(title, content, primePrice, price, null, null, salesNum, openURL, imgURL, function(e, data) {
				if(e){
					console.warn(e);
				}
			});
		});
		cb();//TODO 需要确保循环中的 新增 是异步的，，需呀保证执行完毕后执行cb();
	}, function(err) {
		cb(err);
	});
};