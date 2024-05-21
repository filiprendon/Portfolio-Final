// Follow pointer
const blob = document.getElementById("blob");

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

function typeWriter(element, text, lp, i = 0) {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    setTimeout(() => typeWriter(element, text, lp, i + 1), typingSpeed);
  } else {
    lp();
  }
}

const element = document.querySelector(".typing-text");
const text = "Filip Rendón - Web Developer";
const typingSpeed = 40;

typeWriter(element, text, loadPage);

function loadPage() {
  console.log("Prueba");
//   document.querySelector(".start").classList.add("animated");
}
