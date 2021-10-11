// zet de functie om naar een arrow functie

// Deel A
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
  };
  
  ikRockArrowFunctions()


  const ikRockArrowFunctions2 = () => console.log("Joe, ik rock de arrow functions!");

// Opdracht Deel B
    const fivePlusSeven = function () {
    return 5 + 7
  };
  
  fivePlusSeven();


  const fivePlusSeven2 =  () => 5 + 7


// Opdracht Deel C
const myfunction = (a,b) => a + b


// Opdracht Deel D
const myfunction = a => a >= a + 5


//Opdracht Deel E
//Deel E: Je hebt gezien dat arrow functions een implicit return statement hebben wanneer je de code op 1 regel kunt schrijven. Er is 1 uitzondering, namelijk bij het returnen van een object {} . Wanneer je een object returned moet het object in een () gezet worden, om niet verward te worden met de curly braces {} van een function.
//Opdracht: Schrijf een arrow function met de naam createObject met een implicit return statement (dus op 1 regel) die een simpel object returned: {greeting: "hoi"}

const createObject = () => ({ greeting: "hoi"})