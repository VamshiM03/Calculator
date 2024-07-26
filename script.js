
const display = document.getElementById("display");
let count ="";

function appendToDisplay(Input){
        display.textContent += Input;
        count = count + input; 
}
function calculate(){
        display.textContent = eval(display.textContent);

}
function clearDisplay(){
        display.textContent="";
}