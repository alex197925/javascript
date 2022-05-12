/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(async () => {
    // your code here



    async function getData() {
        const input = document.getElementById("hero-id").value
        const response = await fetch(`http://localhost:3000/heroes/${input}`)
        const data = await response.json();


        target.append(li)
        li.append(h4, p)
        h4.append(strong, em)
        p.innerHTML = data.abilities
        em.innerHTML = data.alterEgo
        strong.innerHTML = data.name

    }

const li = document.createElement("li")
    const h4 = document.createElement("h4")
    const strong = document.createElement("strong")
    const p = document.createElement("p")
    const em = document.createElement("em")










    document.getElementById("run").addEventListener("click", function () {
       getData()


    })


















})();
