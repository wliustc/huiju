var mongoose  = require('mongoose');
var BaseModel = require("./base_model");
var Schema    = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String}, //显示名称
  loginName: { type: String}, //登陆账号
  pass: { type: String }, //密码
  email: { type: String}, //邮件
  profileImageUrl: {type: String}, //头像
  location: { type: String }, //地址
  openId:{ type: String }, //openid
  retrieveKey:{ type: String }//激活码
  
});

UserSchema.plugin(BaseModel);

UserSchema.index({loginName: 1}, {unique: true});
UserSchema.index({email: 1}, {unique: true});
UserSchema.index({openId: 1}, {unique: true});

mongoose.model('User', UserSchema);
