/**
 * config
 */

var path = require('path');

var config = {
  // debug 为 true 时，用于本地调试
  debug: true,

  get mini_assets() { return !this.debug; }, // 是否启用静态文件的合并压缩，详见视图中的Loader

  name: 'huiju', 
  description: '', 
  keywords: '',
  // mongodb 配置
  db: 'mongodb://127.0.0.1/huiju_dev',

  // redis 配置，默认是本地
  redis_host: '127.0.0.1',
  redis_port: 6379,
  redis_db: 0,


  // 程序运行的端口
  spider_port: 3000,
  app_port: 3001,
  // newrelic 是个用来监控网站性能的服务
  newrelic_key: '697ec00e5ffaddeee3b94b75173fb5b2a68b7ce9',

};

if (process.env.NODE_ENV === 'test') {
  config.db = 'mongodb://127.0.0.1/huiju_test';
}

module.exports = config;
