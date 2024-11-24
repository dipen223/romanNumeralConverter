let numberInput = document.getElementById("number")
let convertBtn = document.getElementById("convert-btn");
let outputWrapper = document.getElementById("output");

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
       ['IX',9],
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
const  output = (message) =>{
    outputWrapper.style.display="block";
    outputWrapper.innerHTML = `<p>${message}</p>`
}

// input valdation and ouput
let inputValidator = (e) => {
    e.preventDefault();
    let number = Number(numberInput.value);

    if (!number)  {
        output(`Please enter a valid number.`);
    }
    else if (number < 0) {
      
      output( `Please enter a number greater than or equal to 1.`);
    }
    
    else if (number >= 4000){
       output(`Please enter a number less than or equal to 3999.`);    
    }
    else{
        romanNUmeralConverter(number);
    }
}

convertBtn.addEventListener("click",inputValidator)