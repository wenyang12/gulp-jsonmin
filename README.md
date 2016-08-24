# gulp-jsonmin

> 压缩json内容
> 剥离格式、空格、换行符等

```js
gulp.src(['build/assets/**/*.js'])
.pipe(jsonmin())
.pipe(gulp.dest('build'))
```
