/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let redButton = document.getElementById("red")
let greenButton = document.getElementById("green")
let yellowButton = document.getElementById("yellow")
let blueButton = document.getElementById("blue")



redButton.addEventListener("click", function onClick(e){
    document.body.style.backgroundColor = "red"
})

greenButton.addEventListener("click", function onClick(e){
    document.body.style.backgroundColor = "green"
})
yellowButton.addEventListener("click", function onClick(e){
    document.body.style.backgroundColor = "yellow"
})

blueButton.addEventListener("click", function onClick(e){
    document.body.style.backgroundColor = "blue"
})

