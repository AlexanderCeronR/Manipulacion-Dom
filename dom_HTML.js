//Que es el DOM? (Document Object Model. por sus siglas en inglés)

//El DOM es una representación del documento HTML como un grupo de nodos y objetos. Determinando así la forma en la cual se puede acceder y modificar la estructura, contenido y estilo de un documento HTML. En palabras mas sencillas el DOM le dice a un programa como JavaScript que nodo o parte del HTML esta leyendo (como puede ser un párrafo o un titulo o una sección, etc.) y es el mismo DOM el que modela como un objeto (con sus propiedades y métodos) esa parte del documento. Con JS se accede a esas propiedades y se invoca esos métodos para modificar, eliminar, crear, etc. elementos en una pagina web.

console.log("Hello World");

const h1 = document.querySelector("h1"); //Selecccionar por etiqueta con querySelector
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btn-calcular");
const pBtn = document.querySelector("#resultado");

form.addEventListener("submit", sumarInputsValues);

function sumarInputsValues(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = (Number(input1.value) + Number(input2.value));
    pBtn.innerHTML = "El resultado es: " + sumaInputs;
}