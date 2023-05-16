const printFizz = "FIZZ";

const printBuzz = "BUZZ";

const printFizzBuzz = printFizz + printBuzz;

const ulElement = document.querySelector("ul");

for (i = 1; i <= 100; i++){
    const liElement = document.createElement("li");

    if (i % 3 === 0 && i % 5 === 0){
        console.log(printFizzBuzz);

        liElement.append("FIZZBUZZ");

        liElement.classList.add("fizzBuzzText");
    } else if (i % 3 === 0){
        console.log(printFizz);

        liElement.append("FIZZ");

        //liElement.classList.remove("fizzBuzzText");

        liElement.classList.add("fizzText");
    } else if (i % 5 === 0){
        console.log(printBuzz);

        liElement.append("BUZZ");

        //liElement.classList.remove("fizzText");

        liElement.classList.add("buzzText");
    } else{
        console.log(i);

        liElement.append(i);
    };

    ulElement.append(liElement)
};