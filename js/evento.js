const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    event.stopPropagation(); // Detiene la propagación del evento al div padre 
    alert("Hola! Soy el Div");
});