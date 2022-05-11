/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let input1 = document.getElementById("pass-one")
    let input2 = document.getElementById("pass-two")

    // your code here
   document.getElementById("run").addEventListener("click", function () {
if(input1.value === input2.value) {
    console.log("Yes its works")
}else {
    input1.classList.add("error")
    input2.classList.add("error")
}
   })

})();
