var models = require('../models');
var Goods = models.Goods;
exports.count = function(openURL, cb) {
  Goods.count({
    openURL: openURL
  }, cb);
};
exports.newAndSave = function(title, content, primePrice, price, pushTime, typeId, salesNum, openURL, imgURL, callback) {
  exports.count(openURL, function(e, i) {
    if (i && i > 0) {
      callback('存在同样地址的数据，无法新增!');
      return;
    } else {
      if (openURL && salesNum && title && content && price && primePrice && imgURL) {
        var goods = new Goods();
        goods.title = title;
        goods.content = content;
        goods.primePrice = primePrice;
        goods.price = price;
        goods.pushTime = pushTime;
        goods.typeId = typeId;
        goods.salesNum = salesNum;
        goods.openURL = openURL;
        goods.imgURL = imgURL;
        goods.save(callback);
      } else {

        callback('存在数据为空的');
      }

    }
  });

};