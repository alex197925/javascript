/**
 * /* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 *
 * @format
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
 const hover = document.getElementById("img-hover").getAttribute("data-hover")
   const sours = document.getElementById("img-hover").src
 const image = document.getElementById("img-hover");

    image.onmouseover = function() {  image.src = hover; }
    image.onmouseout = function() {  image.src = sours; }


    console.log(sours)
    console.log(hover)

})();
