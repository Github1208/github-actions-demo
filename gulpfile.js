


const { src, dest, task } = require('gulp');



task('default', async () => {
    src('src/index.html')
    .pipe(dest('dist/'));
})