var mongoose  = require('mongoose');
var BaseModel = require("./base_model");
var Schema    = mongoose.Schema;

var GoodsSchema = new Schema({
  title: { type: String }, //标题
  content: { type: String }, //描述
  prime_price:{ type: Number }, //原价
  price:{ type: Number }, //现价
  pushTime:{ type: Date, default: Date.now }, //发布时间
  createTime: { type: Date, default: Date.now }, //创建时间
  updateTime: { type: Date, default: Date.now }, //修改时间
  typeId:{ type: String },//分类id
  deleted: {type: Boolean, default: false} ,//是否删除
  salesNum:{ type: Number } //销量
});

GoodsSchema.plugin(BaseModel);

GoodsSchema.index({pushTime: -1});
GoodsSchema.index({price: -1});
GoodsSchema.index({createTime: -1});

mongoose.model('Goods', GoodsSchema);
