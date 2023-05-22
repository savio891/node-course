const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const  concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true})) //Remove white spaces 
        .pipe(gulp.dest('build'))
}

function appCSS() {
    return gulp.src('src/assets/sass/index.scss')//Lê arquivo css no diretório.
        .pipe(sass().on('err', sass.logError))//Pré-processador de arquivos css, se tiver um erro retorna um erro.
        .pipe(uglifycss({"uglyComments": true}))//Mimifica o arquivp lido.
        .pipe(concat('app.min.css'))//Concatena todos os resultados do pré-processamento e os envia para um novo arquivo.
        .pipe(gulp.dest('build/assets/css'))//Diretório que será enviado o novo arquivo.
}

function appJS() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['ENV']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG() {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)


module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}