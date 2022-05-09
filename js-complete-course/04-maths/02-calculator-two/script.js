/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value




    var performOperation = function(operation) {
        // perform the operation
        let input1 = parseInt(document.getElementById("op-one").value)
        let input2 = parseInt(document.getElementById("op-two").value)

      let result = 0;

        switch (operation) {
            case "addition":
            result = input1 + input2
                alert(+input1+" + "+input2+" = "+result);
            break;
            case "substraction":
                result = input1 - input2
                alert(+input1+" - "+input2+" = "+result);
                break;
            case "multiplication":
                    result = input1 * input2
                alert(+input1+" * "+input2+" = "+result)
            case "division":
                result = input1 / input2
                alert(+input1+" / "+input2+" = "+result)

            default:
                console.log('Invalid operator');
                break;
        }
    };














    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
