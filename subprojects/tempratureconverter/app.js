const temprature = document.getElementById('temp');
const unit = document.getElementById('unit');
const convertB = document.getElementById('convert');
const results = document.getElementById('results');
let temp1;
let temp2;

function convert(){
    if(unit.value == "°C"){
        temp1 = (Number(temprature.value) * 9/5) + 32; //f
        temp2 = (Number(temprature.value) +273.15); //k
        results.textContent = `Fahrenheit: ${temp1.toFixed(1)}°F \n Kelvin: ${temp2.toFixed(1)}K`;
        unit.value = "°C";
    }
    else if(unit.value == "°F"){
        temp1 = (Number(temprature.value) - 32) * 5/9; //c
        temp2 = (Number(temprature.value) - 32) * 5/9 + 273.15; //k
        results.textContent = `Celsius: ${temp1.toFixed(1)}°C \n Kelvin: ${temp2.toFixed(1)}K`;
        unit.value = "°F";
    }
    else if(unit.value == "K"){
        temp1 = (Number(temprature.value) - 273.15); //c
        temp2 = (Number(temprature.value) + 273.15) * 9/5 + 32; //k
        results.textContent = `Celsius: ${temp1.toFixed(1)}°C \n Fahrenheit: ${temp2.toFixed(1)}°F`;
        unit.value = "°K";
    }
    else{
        results.textContent = "Something Went Wrong Please Try Again";
    }
}

convertB.onclick = convert;

