/**
 *
 * 压缩json内容
 *
 * @author luoying
 */

'use strict';

const through2 = require('through2');

module.exports = () => {
  return through2.obj((file, enc, cb) => {
    if (file.isNull()) return cb(null, file);
    let json = JSON.parse(file.contents.toString());
    file.contents = new Buffer(JSON.stringify(json));
    cb(null, file);
  });
};
