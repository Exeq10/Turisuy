const { src, dest, watch } = require("gulp");

const sass = require("gulp-sass")(require("sass"));

const plumber = require("gulp-plumber");

const webp = require("gulp-webp");

function css(done) {
  src("src/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest("build/css"));

  done();
}

function dev(done) {
  watch("src/scss/**/*.scss", css);

  done();
}

function imgwebp(done) {
  const opciones = {
    quality: 80,
  };

  src("src/img/**/*.{png,jpeg,jpg}")
    .pipe(webp(opciones))
    .pipe(dest("build/img"));

  done();
}

exports.css = css;
exports.dev = dev;
exports.imgwebp = imgwebp;
