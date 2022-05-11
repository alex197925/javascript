/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const api_url = "http://localhost:3000/heroes"

async function getHeroesData () {
    console.log("fetch start")
        let data = await fetch(api_url)
        let main = await data.json()
    console.log(main)

}

    console.log("lets begin")
    getHeroesData ().then(console.log("done"))


})();
