let leftBtn = document.querySelector("#left-color");
let rightBtn = document.querySelector("#right-color");
let copyBoard = document.querySelector("#copy-css");


let baseRGB1 = "#3e93ad";
let baseRGB2 = "#270c36";



const getHexValues = () => {

    let hexValues = "0123456789abcdef";
    let hexCode = "#";

    for (let i = 0; i < 6; i++) {
        
        hexCode += hexValues[Math.floor(Math.random() * 16)];
    }
    
    return hexCode;

}


const updateGredient = () => {

    document.body.style.backgroundImage = `linear-gradient(to right, ${baseRGB1} , ${baseRGB2})`;
    copyBoard.textContent = `background-image: linear-gradient(to right, ${baseRGB1} , ${baseRGB2})`;

}


const leftButtonFunction = () => {
   baseRGB1 = getHexValues();

   leftBtn.textContent = baseRGB1;
   leftBtn.style.backgroundColor = baseRGB1;

   updateGredient();

}



const rightButtonFunction = () => {
    baseRGB2 = getHexValues();

    rightBtn.textContent = baseRGB2;
    rightBtn.style.backgroundColor = baseRGB2;

    updateGredient();

}

const copyText = () => {
    navigator.clipboard.writeText(copyBoard.textContent);
    alert("CSS copied to your clipboard");
}


copyBoard.addEventListener("click",copyText);
leftBtn.addEventListener("click", leftButtonFunction);
rightBtn.addEventListener("click", rightButtonFunction);