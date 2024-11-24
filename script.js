let numberInput = document.getElementById("number")
let convertBtn = document.getElementById("convert-btn");
let outputWrapper = document.getElementById("output-container");

// main logic of the program
let romanNUmeralConverter = (num) =>{
    let allRomanNumberSigns = [
       ['M',1000],
       ['CM',900],
       ['D',500],
       ['CD',400],
       ['C',100],
       ['XC',90],
       ['L',50],
       ['XL',40],
       ['X',10],
       ['V',5],
       ['IV',4],
       ['I',1]
];
    const romanNumber = [];
    allRomanNumberSigns.forEach( function (arr){
        while(num >= arr[1]){
            romanNumber.push(arr[0]);
            num -=  arr[1];
        }
    });
    output(romanNumber.join(''));

    };

// output 
const  output = (romanNumber) =>{
    outputWrapper.style.display="block";
    outputWrapper.innerHTML = `<p>${romanNumber}</p>`
}

// input valdation and ouput
let inputValidator = (e) => {
    e.preventDefault();
    let number = Number(numberInput.value);
    if (number == "" ){
           outputWrapper.style.display="block";
           outputWrapper.innerHTML = `<p>Please enter a valid number.</p>`
    }
    else if (number < 0) {
        outputWrapper.style.display="block";
        outputWrapper.innerHTML = `<p>Please enter a number greater than or equal to 1. </p>`
    }
    
    else if (number >= 4000){
        outputWrapper.style.display="block";
           outputWrapper.innerHTML = `<p>Please enter a number less than or equal to 1.</p>`
        
    }
    else{
        romanNUmeralConverter(number);
    }
}




convertBtn.addEventListener("click",inputValidator)