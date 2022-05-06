/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    // your code here
// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//Let's see if the button get's clicked


const btnRun = document.getElementById('run').addEventListener('click',calculateAge);



function calculateAge(){

    const dobDay = document.getElementById('dob-day').value;
    const dobMonth = document.getElementById('dob-month').value;
    const dobYear = document.getElementById('dob-year').value;

    const currentDate = new Date();
    const dobDate = new Date(dobYear,dobMonth,dobDay);

    const ageYears = currentDate.getFullYear() - dobDate.getFullYear();


    const ageMonths = currentDate.getMonth() - dobDate.getMonth() +1;
    const ageDays = currentDate.getDay() - dobDate.getMonth() +1;
    document.getElementById('target').innerHTML = "You are: " + ageYears ;

}


