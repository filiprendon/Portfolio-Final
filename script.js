// Follow pointer
const blob = document.getElementById("blob");
let text = "Just a moment...";
const palabras = ["Web Developer", "Drake shlong", "Puerto Freako"];
let element = document.querySelector(".typing-text");
let easter = document.querySelector(".intro");
let i = 0;
const letras = "ABCDEFGHIJKLMNOPWZRSTUVY";

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

easter.onmouseover = (e) => {
  let v = 0;

  const interval = setInterval(() => {
    e.target.innerText = e.target.innerText
      .split("")
      .map((letra, index) => {
        if (index < v) {
          return e.target.dataset.value[index];
        }
        return letras[Math.floor(Math.random() * 15)];
      })
      .join("");

    if (v >= 15) clearInterval(interval);

    v += 1;
  }, 100);
};

function typeWriter(lp, i = 0) {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    setTimeout(() => typeWriter(lp, i + 1), 60);
  } else {
    lp();
  }
}

window.ondblclick = (e) => {
  console.log(palabras.join(", "));
};

typeWriter(loadPage);

function loadPage() {
  console.log("Prueba");
  setTimeout(() => {
    document.querySelector(".typing-text").classList.add("animated");
    document.querySelector(".intro").classList.add("loadAnimation");
    document.querySelector(".introText").classList.add("loadAnimation");
  }, 1500);
}

const textEl = document.getElementById("text");
const customCursor = document.getElementById("custom-cursor");

// Calcular el tamaño del cursor personalizado
const fontSize = parseInt(
  window
    .getComputedStyle(textEl)
    .getPropertyValue("font-size")
    .replace("px", "")
);
const cursorSize = fontSize * 1.4;

// Función para mover el cursor personalizado
function moveCursor(event) {
  customCursor.style.left = event.clientX - cursorSize / 2 + "px";
  customCursor.style.top = event.clientY - cursorSize / 2 + "px";
}

// Función para ampliar el cursor cuando se coloca sobre el texto
function enlargeCursor() {
  customCursor.style.width = cursorSize + "px";
  customCursor.style.height = cursorSize + "px";
}

// Función para restablecer el tamaño del cursor cuando se sale del texto
function resetCursor() {
  customCursor.style.width = "20px";
  customCursor.style.height = "20px";
}

// Agregar eventos de escucha
textEl.addEventListener("mouseover", enlargeCursor);
textEl.addEventListener("mouseout", resetCursor);
document.addEventListener("mousemove", moveCursor);
