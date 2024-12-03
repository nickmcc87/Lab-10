function greetUser(username){
  document.getElementById('output').innerHTML = "Greeting Messasge for Question 1"
}
greetUser()
function changeText(){
    document.getElementById('message').innerText="hello world!"
}
document.getElementById('btn1').addEventListener('click', changeText)

function addNumber(){
    document.getElementById('result').innertext = Number(document.getElementByID('num1').value) + Number(documentgetElementByID('num2').value);
}
document.getElementById('btn2').addEventListener('click',addNumber)

document.getElementById('btn3').onlick = function(){
    updateTitle();
}
function updateTitle(){
    document.getElementById('title').innerText = document.getElementById('inputField').value;
}

document.getElementById('btn4').onclick = function(){
    CombineStrings();
}
function CombineStrings(){
    document.getElementById('combinedText').innertext = document.getElementByID('num1').value + document.getElementById('input2').value;
}

function changeBackgroundColor(){
    document.getElementById('colorbox').style.backgroundColor = "blue";
}

document.getElementById('change').addEventListener("click", changeBackgroundColor)