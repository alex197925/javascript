# READ IT
## EX 02
* Open index.html in your browser. What is the difference between this and the previous example?
* Do you notice a difference between the 2 document.write lines?
* Look at the 'Template literals' documentation

````
1. When we want to concatenate several strings
together, we usually use the concatenation
operator "+".
document.write("<h1>Top " + amount + " Greatest Movies of All Time</h1>");

2.  We  now use a
"template string" using the " ` " (backtick)
character.
This, all variables are accessible via "${<my
variable>}".
document.write(`<h2>The first ${amount / 2} movies</h2>`);