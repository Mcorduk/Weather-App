/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./dist/*.html",
    "./dist/*.js",
    "./dist/styles/*.css",
  ], // Update content paths
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
