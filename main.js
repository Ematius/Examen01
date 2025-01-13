

const form = document.querySelectorAll('.form');
const input = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');
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
        });
    });
    input.addEventListener("click", (event) => {
        event.preventDefault();
        if (selectedValue !== "") {
            const main = document.querySelector(".hero");
            main.innerHTML = /*html*/ `
                <header>
                    <img src="img/illustration-thank-you.svg" alt="Imagen de agradecimiento">
                    <div>
                        <p>Seleccionaste ${selectedValue} de 5</p>
                    </div>
                </header>
                <section>
                    <h2>¡Gracias!</h2>
                    <p>Agradecemos que te hayas tomado el tiempo de dar una calificación. Si alguna vez necesitas más ayuda, no dudes en volver a ponerte en contacto con nosotros</p>
                </section>
        `;
        }
    });
}



handleButton();


