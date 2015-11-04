/**
 * 给所有的 Model 扩展功能
 * http://mongoosejs.com/docs/plugins.html
 */
var tools = require('../common/tools');

module.exports = function (schema) {
  schema.methods.create_at_ago = function () {
    return tools.formatDate(this.createTime, true);
  };

  schema.methods.updated_at_ago = function () {
    return tools.formatDate(this.createTime, true);
  };
};
