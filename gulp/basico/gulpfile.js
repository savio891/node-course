const gulp = require('gulp')
const {series, parallel} = require('gulp')

const before1 = cb => {
    console.log('Task before 1!')
    return cb()
}

const before2 = cb => {
    console.log('Task before 2!')
    return cb()
}

function copy(cb) {
    gulp.src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaB'))
    return cb()
}

const end = cb => {
    console.log('Task End!')
    return cb()
}

module.exports.default = series(
    parallel(before1, before2),
    copy,
    end,
)