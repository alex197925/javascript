/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value




    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let input1 = document.getElementById("op-one").value
        let input2 = document.getElementById("op-two").value
        let result = Number(input1) + Number(input2);
        alert(result)


    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let input1 = document.getElementById("op-one").value
        let input2 = document.getElementById("op-two").value
        let result = Number(input1) - Number(input2);
        alert(result)
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let input1 = document.getElementById("op-one").value
        let input2 = document.getElementById("op-two").value
        let result = Number(input1) * Number(input2);
        alert(result)
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let input1 = document.getElementById("op-one").value
        let input2 = document.getElementById("op-two").value
        let result = Number(input1) / Number(input2);
        alert(result)
    });
})();
