let numberInput = document.getElementById("number")
let convertBtn = document.getElementById("convert-btn");
let outputWrapper = document.getElementById("output-container");

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
}




convertBtn.addEventListener("click",inputValidator)