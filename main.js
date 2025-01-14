

const form = document.querySelectorAll('.form');
const input = document.querySelector('.input');
const buttons = document.querySelectorAll(".button");
const question = document.querySelector(".question");
const answerSection = document.querySelector(".answer");
let selectedValue = '';



function handleButton() {
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            buttons.forEach((button) => button.classList.remove("selected"));
            button.classList.add("selected");
            selectedValue = button.getAttribute("value");
            input.setAttribute("data-value", selectedValue); 
            input.removeAttribute("disabled");
            console.log(selectedValue);
        });
    });
    input.addEventListener("click", (event) => {
        event.preventDefault();
        if (selectedValue !== '') {
            question.classList.toggle("hidden");
            answerSection.removeAttribute("hidden");
            answerSection.querySelector("p").textContent = `Seleccionaste ${selectedValue} de 5`;
        }
    });
}



handleButton();


