/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const api_url = "http://localhost:3000/heroes"

    const button = document.getElementById("run")
    const target = document.getElementById("target");



async function getHeroes () {
        let  response = await fetch(api_url)
        let data = await  response.json()
        console.log(data)
}
    getHeroes ()


})();
