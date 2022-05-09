/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
  const imgId = document.getElementById("source")
  const getImgAtribut = imgId.getAttribute("data-image")
  const figure = document.getElementById("target");


  let newImageElement = document.createElement("img")
  newImageElement.src = getImgAtribut

figure.appendChild(newImageElement)


})();
