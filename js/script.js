const printFizz = "FIZZ";

const printBuzz = "BUZZ";

const printFizzBuzz = printFizz + printBuzz;

const ulElement = document.querySelector("ul");

for (i = 1; i <= 100; i++){
    const liElement = document.createElement("li");

    if (i % 3 === 0 && i % 5 === 0){
        console.log(printFizzBuzz);
        liElement.append("FIZZBUZZ")
    } else if (i % 3 === 0){
        console.log(printFizz);

        liElement.append("FIZZ");
    } else if (i % 5 === 0){
        console.log(printBuzz);

        liElement.append("BUZZ");
    } else{
        console.log(i);
        
        liElement.append(i);
    };

    ulElement.append(liElement)
};