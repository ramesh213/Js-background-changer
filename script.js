const myBtn = document.querySelector('.btn');
const body = document.body;
const currentColor = document.querySelector('.color');

function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() *256);
    const randomColor = `rgb(${red}, ${blue}, ${green})`
    return randomColor;
}

myBtn.addEventListener('click', () => {
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
})