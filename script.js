// Follow pointer
const blob = document.getElementById("blob");
let text = "Just a moment...";
const palabras = ["Web Developer", "Drake shlong", "Puerto Freako"];
let element = document.querySelector(".typing-text");
let easter = document.querySelector(".intro");
let i = 0;
const letras = "ABCDEFGHIJKLMNOPQRSTUVXYZ1234567890ÇÑ";

let typingText = document.querySelector(".typing-text");
let introText = document.querySelector(".introText");
let loadContainer = document.querySelector(".load");
let startContainer = document.querySelector(".start");
let skillsContainer = document.querySelector(".skills");
let restContainers = document.querySelectorAll(".rest");
let realContainer = document.querySelectorAll(".real");

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 6000, fill: "forwards" }
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
        return letras[Math.floor(Math.random() * 37)];
      })
      .join("");

    if (v >= 15) clearInterval(interval);

    v += 1;
  }, 45);
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
  console.log(letras.length);
};

typeWriter(loadPage);

function loadPage() {
  console.log("Prueba");
  setTimeout(() => {
    typingText.classList.add("animated");
    // document.querySelector(".intro").classList.add("loadAnimation");
    // introText.classList.add("loadAnimation");
    // skillsContainer.classList.add("loadAnimation");
    loadContainer.classList.add("animated");
    startContainer.classList.add("loadAnimation", "show");
    realContainer.forEach(element => {
      element.classList.add("loadAnimation");
    })

    // restContainers.forEach(rest => {
    //   rest.classList.add('loadAnimation')
    // })
    loadContainer.addEventListener("animationend", () => {
      loadContainer.remove();
    });
    typingText.addEventListener("animationend", () => {
      typingText.remove();
    });
    // document.querySelector("rest").addEventListener("animationend", () => {
    //   element.style.display = "block";
    // });
    realContainer.forEach((element) => {
      element.addEventListener("animationend", () => {
        element.classList.remove('real');
      });

      // document.querySelector('real').style.display = 'block';
    });
  }, 1500);
}

// function loadPage() {
//   console.log("Prueba");
//   setTimeout(() => {
//     document.querySelector(".loading").classList.add("animated");
//     document.querySelector(".about").classList.add("loadAnimation");
//   }, 1500);
// }

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
