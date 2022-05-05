/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function reset () {

    // your code here
    let age = prompt("How old are you?")
    let gender = prompt("What is your gender?")
    let city = prompt("Where you living, city?")
    let data = confirm(`"So you are ${age} years old!  Are you ${gender}! You live in ${city}!`)

if(data == true) {
alert("good")
  }else {
  reset()
}

})();
