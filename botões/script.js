const icone = document.querySelector(".pwd .fa-eye-slash");
const input = document.querySelector(".pwd input");

function troca() {
  if (input.type === "password") {
    icone.classList.remove("fa-eye-slash");
    icone.classList.add("fa-eye");

    input.type = "text";
    console.log(input.type);
  } else {
    icone.classList.remove("fa-eye");
    icone.classList.add("fa-eye-slash");
    input.type = "password";
  }
}

icone.addEventListener("click", troca);
