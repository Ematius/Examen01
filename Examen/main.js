

const form = document.querySelectorAll('.form');
const input = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');
let selectedValue = '';

const main = document.querySelector(".hero");







function handleButton(){
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            
            selectedValue = button.getAttribute("value");
            if (selectedValue !== '') {
                main.innerHTML = /*html*/ `
                        <header>
                            <img src="img/illustration-thank-you.svg" alt="Imagen de agradecimiento">
                            <div>
                                <p>Seleccionaste ${selectedValue} de 5</p>
                            </div>
                        </header>
                        <section>
                            <h2>¡Gracias!</h2>
                            <p>Agradecemos que te hayas tomado el tiempo de dar una calificación. Si alguna vez necesitas más ayuda, no dudes en volver a ponerte en contacto ocn nosotros</p>
                        </section>

                    `; }
            console.log(selectedValue);

        });
    });
}




handleButton();



