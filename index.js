let password = [] 
let passwordText = ""
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordEl = document.getElementById("address-el")
let randomSymbol
function getRandomSymbol() {
    let randomSymbol = Math.floor ( Math.random() * characters.length)
    return characters[randomSymbol]     
}
function addSymbol(){
    let newSymbol = getRandomSymbol()
    passwordText += newSymbol
}

function generate(){
	for (let i = 0; i < 16; i++) {
    addSymbol();
}
    console.log(passwordText)
    passwordEl.textContent = passwordText
    passwordText = ""
    
}

